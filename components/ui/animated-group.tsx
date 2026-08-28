import { Children, type ReactNode } from "react";

type AnimatedGroupProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function AnimatedGroup({ children, className = "", delay = 0 }: AnimatedGroupProps) {
  const items = Children.toArray(children);
  const delayClass = delay ? `animated-group-delay-${Math.round(delay * 100)}` : "";

  return (
    <div className={`animated-group ${delayClass} ${className}`.trim()}>
      {items.map((child, index) => (
        <div key={index} className={`animated-group-item animated-group-item-${index + 1}`}>
          {child}
        </div>
      ))}
    </div>
  );
}
