"use client";

import React from "react";
import Image from "next/image";

const OptimizedImage = ({
  src,
  alt,
  className,
  style,
  width,
  height,
  fill,
  priority,
  loading,
  onLoad,
  usage, // Filter these out
  enableResponsive,
  fetchPriority,
  decoding,
  preload,
  ...props
}) => {
  // Determine if we should use fill
  // In the original code, images without specific dims usually were intended to fill container
  // next/image requires either width/height or fill
  const isFill = fill || (!width && !height);

  return (
    <Image
      src={src || ""}
      alt={alt || ""}
      className={className}
      style={style}
      width={!isFill ? width : undefined}
      height={!isFill ? height : undefined}
      fill={isFill}
      priority={priority || loading === "eager" || fetchPriority === "high"}
      onLoad={onLoad}
      {...props}
    />
  );
};

export default OptimizedImage;
