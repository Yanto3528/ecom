import { Root, Image, Fallback } from "@radix-ui/react-avatar";

import { AvatarProps } from "./Avatar.types";

export default function Avatar({ src, alt, ...props }: AvatarProps) {
  return (
    <Root className="w-6 aspect-square rounded-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        {...props}
      />
      <Fallback>YL</Fallback>
    </Root>
  );
}
