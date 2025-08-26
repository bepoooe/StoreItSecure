import React from "react";
import Image from "next/image";
import { cn, getFileIcon } from "@/lib/utils";

interface Props {
  type: string;
  extension: string;
  url?: string;
  imageClassName?: string;
  className?: string;
}

export const Thumbnail = ({
  type,
  extension,
  url = "",
  imageClassName,
  className,
}: Props) => {
  const isImage = type === "image" && extension !== "svg";
  
  // Use thumbnail-specific icons for video thumbnails
  const getThumbIcon = () => {
    if (isImage) return url;
    if (type === "video") return "/assets/icons/file-video-light-blue.svg"; // Blue-themed video icon
    return getFileIcon(extension, type);
  };

  return (
    <figure className={cn("thumbnail", className)}>
      <Image
        src={getThumbIcon()}
        alt="thumbnail"
        width={100}
        height={100}
        className={cn(
          "size-8 object-contain",
          imageClassName,
          isImage && "thumbnail-image",
        )}
      />
    </figure>
  );
};
export default Thumbnail;
