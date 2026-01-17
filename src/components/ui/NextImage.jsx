"use client";

/**
 * Simple Image wrapper using next/image
 * Provides automatic WebP/AVIF conversion and optimization
 */
import Image from "next/image";

const NextImage = ({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = "",
  sizes = "100vw",
  quality = 80,
  placeholder = "empty",
  onLoad,
  onError,
  style,
  ...props
}) => {
  // Handle missing src
  if (!src) {
    return null;
  }

  // Common props
  const imageProps = {
    src,
    alt: alt || "",
    quality,
    sizes,
    priority,
    className,
    onLoad,
    onError,
    style: {
      ...style,
    },
    ...props,
  };

  // Fill mode (for background-like images)
  if (fill) {
    return (
      <Image
        {...imageProps}
        fill
        style={{
          objectFit: "cover",
          ...style,
        }}
      />
    );
  }

  // Fixed dimensions mode
  return <Image {...imageProps} width={width || 0} height={height || 0} />;
};

export default NextImage;
