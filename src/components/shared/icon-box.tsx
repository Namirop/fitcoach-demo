import { cn } from "@/lib/utils";
import {
  Heart,
  Users,
  Trophy,
  UserCheck,
  TrendingUp,
  Dumbbell,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Users,
  Trophy,
  UserCheck,
  TrendingUp,
  Dumbbell,
};

interface IconBoxProps {
  icon: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "white";
  className?: string;
}

export function IconBox({
  icon,
  size = "md",
  variant = "primary",
  className,
}: IconBoxProps) {
  const Icon = iconMap[icon] || Heart;

  const sizeClasses = {
    sm: "w-10 h-10 p-2",
    md: "w-14 h-14 p-3",
    lg: "w-20 h-20 p-4",
  };

  const variantClasses = {
    primary: "bg-[#2563EB]/10 text-[#2563EB]",
    secondary: "bg-[#F59E0B]/10 text-[#F59E0B]",
    white: "bg-white/10 text-white",
  };

  const iconSizes = {
    sm: 20,
    md: 28,
    lg: 40,
  };

  return (
    <div
      className={cn(
        "rounded-xl flex items-center justify-center",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <Icon size={iconSizes[size]} />
    </div>
  );
}
