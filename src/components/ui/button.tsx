import React from "react";

type VariantColor = "primary" | "secondary" | "third" | "fourth";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variantColor?: VariantColor;
  className?: string; // 👈 Tambahkan ini
}

const variantClasses: Record<VariantColor, string> = {
  primary:
    "bg-[#3B82F6] text-white border-[#3B82F6] hover:bg-white hover:text-[#3B82F6] hover:border-white",
  secondary:
    "bg-[#3B82F6] text-white border-transparent hover:bg-white hover:text-[#3B82F6]",
  third:
    "bg-transparent text-[#3B82F6] border-[#3B82F6] hover:bg-[#3B82F6] hover:text-white",
  fourth:
    "bg-white text-[#3B82F6] border-white hover:bg-transparent hover:text-white hover:border-[#3B82F6]",
};

export default function Button({
  href = "#",
  children,
  variantColor = "primary",
  className = "",
}: ButtonProps) {
  const baseClasses =
    "items-center rounded-full transition-all duration-500 font-bold text-center leading-none px-5 py-2 border";
  const classes = `${baseClasses} ${variantClasses[variantColor]} ${className}`;

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
