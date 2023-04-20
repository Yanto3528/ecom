import { Root, Image, Fallback } from "@radix-ui/react-avatar";

import { AvatarProps } from "./Avatar.types";
import { cn } from "@/lib/utils";

export default function Avatar({
  src,
  alt,
  fallback,
  className,
  rootClassName,
  fallbackClassName,
  ...props
}: AvatarProps) {
  return (
    <Root
      className={cn(
        "w-6 aspect-square text-xs bg-primary-200 flex items-center justify-center rounded-full overflow-hidden",
        rootClassName
      )}
    >
      <Image
        src={src}
        alt={alt}
        className={cn("w-full h-full object-cover", className)}
        {...props}
      />
      <Fallback className={cn("font-semibold", fallbackClassName)}>
        {fallback}
      </Fallback>
    </Root>
  );
}
