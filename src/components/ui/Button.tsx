import type { ReactNode } from "react";

const variants = {
  ink: "btn btn-ink",
  bone: "btn btn-bone",
  bronze: "btn btn-bronze",
  ghost: "btn btn-ghost",
  ghostDark: "btn btn-ghost-dark",
};

const sizes = {
  md: "btn-md",
  lg: "btn-lg",
};

type CTAProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  target?: string;
  alt?: string;
};

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className ?? "h-[18px] w-[18px]"}
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CTA({
  href,
  children,
  variant = "ink",
  size = "md",
  className = "",
  target = "_blank",
  alt,
}: CTAProps) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      aria-label={alt}
      className={`btn group ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span>{children}</span>
      <ArrowIcon className="btn-arrow h-[18px] w-[18px] shrink-0" />
    </a>
  );
}