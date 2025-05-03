"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  size?: "sm" | "md" | "lg";
  src?: string;
  alt?: string;
  fallback?: string;
}

export function UserAvatar({
  size = "md",
  src = "/images/user-avatar.jpg",
  alt = "User avatar",
  fallback = "AJ",
}: UserAvatarProps) {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error("Error loading avatar image");
    e.currentTarget.style.display = "none";
  };

  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-24 w-24",
  };

  return (
    <Avatar className={sizeClasses[size]}>
      <AvatarImage src={src} alt={alt} onError={handleImageError} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}
