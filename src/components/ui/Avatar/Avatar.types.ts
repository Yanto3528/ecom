import { AvatarImageProps } from "@radix-ui/react-avatar";

export interface AvatarProps extends AvatarImageProps {
  fallback: string;
  rootClassName?: string;
  fallbackClassName?: string;
}
