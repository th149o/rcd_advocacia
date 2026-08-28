import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`section-content ${delay ? "section-content-delayed" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}

export function Stagger({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`section-content group/cards card-stagger ${className}`.trim()}>{children}</div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`card-stagger-item group/card transition-[transform,opacity,filter] duration-300 ease-out group-hover/cards:scale-[0.985] group-hover/cards:opacity-60 group-hover/cards:blur-[1px] hover:!scale-[1.015] hover:!opacity-100 hover:!blur-none focus-within:!scale-[1.015] focus-within:!opacity-100 focus-within:!blur-none ${className}`.trim()}
    >
      {children}
    </div>
  );
}
