export function Eyebrow({
  children,
  dark = false,
  className = "",
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] ${
        dark ? "text-bone-muted" : "text-bronze-deep"
      } ${className}`}
    >
      <span
        aria-hidden="true"
        className={`h-px w-8 ${dark ? "bg-bone-muted/60" : "bg-bronze/50"}`}
      />
      {children}
    </p>
  );
}

export function Diamond({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`block h-1.5 w-1.5 rotate-45 ${className}`}
    />
  );
}

export function NailF1({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className || "h-4 w-4 shrink-0"}
    >
      <path d="M12 3.4c2.3.7 4 2.4 4.8 4.6.9 2.3.9 4.8-.2 6.9-.6 1.5-1.9 2.8-3.5 3.4-1.2.4-2.5.4-3.7 0-1.6-.6-2.9-1.9-3.5-3.4-1.1-2.1-1.1-4.6-.2-6.9.8-2.2 2.5-3.9 4.8-4.6Z" />
      <path d="M9.5 13.5c.7 1.1 2.3 1.1 3 0" />
    </svg>
  );
}

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      aria-hidden="true"
      className={className || "h-4 w-4 shrink-0"}
    >
      <path
        d="m5 12.5 4.2 4.2L19 7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}