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
    "bg-white text-[#B61718] border-white hover:bg-[#131313] hover:text-[#B61718] hover:border-[#131313]",
  secondary: "bg-white text-[#131313] border-transparent hover:text-white",
  third: "bg-transparent text-white border-white hover:text-white",
  fourth:
    "bg-[#131313] text-white border-[#131313] hover:bg-transparent hover:text-[#131313]",
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
