import Image from "next/image";
import { cn, isSvgSrc } from "@/lib/utils";

interface PortfolioImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
  objectPosition?: "top" | "center" | "bottom";
}

const positionMap = {
  top: "object-top",
  center: "object-center",
  bottom: "object-bottom",
} as const;

export function PortfolioImage({
  src,
  alt,
  fill = true,
  className,
  sizes,
  priority,
  objectPosition = "center",
}: PortfolioImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={sizes}
      priority={priority}
      unoptimized={isSvgSrc(src)}
      className={cn(
        "object-cover",
        positionMap[objectPosition],
        className
      )}
    />
  );
}