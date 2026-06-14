import { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  className?: string;
}

/**
 * Small monospace pill used for tech stack labels, research domains, etc.
 */
export function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-border bg-bg-card px-3 py-1 font-mono text-xs text-text-muted transition-colors duration-200 ${className}`}
    >
      {children}
    </span>
  );
}
