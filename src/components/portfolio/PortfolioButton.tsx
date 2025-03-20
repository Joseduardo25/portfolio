import React from "react";
import { cn } from "@/lib/utils";

interface PortfolioButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "white";
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export const PortfolioButton: React.FC<PortfolioButtonProps> = ({
  children,
  variant = "outline",
  className,
  icon,
  onClick,
}) => {
  const baseStyles =
    "flex items-center gap-2 overflow-hidden text-base font-semibold px-4 py-2 rounded-[200px]";

  const variantStyles = {
    primary: "bg-white text-[rgba(22,22,22,1)] justify-center",
    secondary: "bg-[rgba(38,38,39,1)] text-white justify-center",
    outline: "border border-[rgba(108,108,111,1)] border-solid text-white",
    white: "bg-white text-[rgba(22,22,22,1)] justify-center",
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      onClick={onClick}
    >
      <span className="self-stretch my-auto">{children}</span>
      {icon && icon}
    </button>
  );
};

export default PortfolioButton;
