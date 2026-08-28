import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonStyle = "gold" | "outline" | "light" | "text";

const styles: Record<ButtonStyle, string> = {
  gold: "bg-gold text-ink hover:bg-gold-deep hover:text-off-white shadow-gold",
  outline: "border border-gold/50 text-gold hover:border-gold hover:bg-gold/10",
  light: "bg-off-white text-ink hover:bg-gold hover:text-ink",
  text: "text-current underline decoration-gold/70 underline-offset-8 hover:text-gold",
};

const base =
  "inline-flex min-h-12 cursor-pointer items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-bold transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-50";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonStyle;
};

export function Button({ children, variant = "gold", className = "", ...props }: ButtonProps) {
  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: ButtonStyle;
};

export function ButtonLink({
  children,
  variant = "gold",
  className = "",
  href,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={`${base} ${styles[variant]} ${className}`} href={href} {...props}>
      {children}
    </Link>
  );
}
