import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations";

// Email recipient - can be changed in production
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "contact@fitcoachpro.fr";

export async function POST(request: Request) {
  try {
    // Initialize Resend lazily to avoid build-time errors
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        {
          success: false,
          error: "Le service d'envoi d'emails n'est pas configuré.",
        },
        { status: 500 }
      );
    }

    // Parse the request body
    const body = await request.json();

    // Validate the form data using Zod schema
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      // Return validation errors
      return NextResponse.json(
        {
          success: false,
          error: "Données invalides",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, phone, requestType, message } = validationResult.data;

    // Map request type to readable label
    const requestTypeLabels: Record<string, string> = {
      info: "Demande d'information",
      coaching: "Coaching 1-to-1",
      online: "Programme en ligne",
      transformation: "Pack Transformation",
      other: "Autre",
    };

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "FitCoach Pro <onboarding@resend.dev>", // Use your verified domain in production
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `[FitCoach Pro] Nouvelle demande de ${name} - ${requestTypeLabels[requestType] || requestType}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nouvelle demande de contact</title>
          </head>
          <body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1F2937; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%); padding: 30px; border-radius: 12px 12px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">Nouvelle demande de contact</h1>
            </div>

            <div style="background: #ffffff; padding: 30px; border: 1px solid #E5E7EB; border-top: none; border-radius: 0 0 12px 12px;">
              <div style="background: #F9FAFB; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h2 style="color: #2563EB; margin: 0 0 15px 0; font-size: 18px;">Informations du contact</h2>
                <p style="margin: 8px 0;"><strong>Nom :</strong> ${name}</p>
                <p style="margin: 8px 0;"><strong>Email :</strong> <a href="mailto:${email}" style="color: #2563EB;">${email}</a></p>
                <p style="margin: 8px 0;"><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
                <p style="margin: 8px 0;"><strong>Type de demande :</strong> ${requestTypeLabels[requestType] || requestType}</p>
              </div>

              <div style="margin-top: 20px;">
                <h2 style="color: #2563EB; margin: 0 0 15px 0; font-size: 18px;">Message</h2>
                <div style="background: #F9FAFB; padding: 20px; border-radius: 8px; white-space: pre-wrap;">${message}</div>
              </div>

              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E5E7EB;">
                <p style="color: #6B7280; font-size: 14px; margin: 0;">
                  Ce message a été envoyé depuis le formulaire de contact de <strong>FitCoach Pro</strong>.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
Nouvelle demande de contact - FitCoach Pro

INFORMATIONS DU CONTACT
------------------------
Nom : ${name}
Email : ${email}
Téléphone : ${phone || "Non renseigné"}
Type de demande : ${requestTypeLabels[requestType] || requestType}

MESSAGE
-------
${message}

---
Ce message a été envoyé depuis le formulaire de contact de FitCoach Pro.
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        {
          success: false,
          error: "Erreur lors de l'envoi du message. Veuillez réessayer.",
        },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Une erreur inattendue s'est produite. Veuillez réessayer.",
      },
      { status: 500 }
    );
  }
}
