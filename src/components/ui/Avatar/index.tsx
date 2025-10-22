import { cn } from "@/lib/utils";
import { UserRound } from "lucide-react";
import Image from "next/image";

type AvatarProps = {
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
};

export const Avatar = ({ src, alt, size, className }: AvatarProps) => {
  if (!src) {
    return (
      <div className={`h-fit w-fit ${className}`}>
        <UserRound size={size} />
      </div>
    );
  }
  return (
    <div className={cn("relative h-10 w-10", className)}>
      <Image src={src} alt={alt ?? ""} fill />
    </div>
  );
};
