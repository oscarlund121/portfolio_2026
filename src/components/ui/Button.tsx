import React from "react";
import Link from "next/link";

interface Props {
  variant?: "primary" | "outline" | "accent";
  href?: string;
  external?: boolean;
  children?: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

const base =
  "inline-flex items-center justify-center font-bold text-sm tracking-wide transition-all border-2 border-black shadow-[4px_4px_0px_black] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_black] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_black]";

const variants = {
  primary: "bg-white text-black px-8 py-3",
  outline: "bg-transparent text-black px-8 py-3",
  accent: "bg-mux-yellow text-black px-8 py-3",
};

const Button = ({
  variant = "primary",
  href,
  external = false,
  children,
  className = "",
  type = "button",
  disabled = false,
}: Props) => {
  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;