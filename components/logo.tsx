import Image from "next/image";

type LogoProps = { size?: "small" | "medium" | "large"; className?: string };

const dimensions = {
  small: { width: 34, height: 43 },
  medium: { width: 58, height: 73 },
  large: { width: 130, height: 162 },
};

export function Logo({ size = "small", className = "" }: LogoProps) {
  const { width, height } = dimensions[size];
  return (
    <Image
      src="/logo.png"
      alt="RCD Advocacia"
      width={width}
      height={height}
      priority={size !== "small"}
      className={`h-auto w-auto object-contain ${className}`}
    />
  );
}
