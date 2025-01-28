import Image from 'next/image';
import React from 'react';

interface IconProps {
  color?: string;
  icon: string;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  alt: string;
}

export const Icon: React.FC<IconProps> = ({
  color,
  icon,
  width = 16,
  height = 16,
  alt,
}) => {
  return (
    <Image
      src={`/images/icons/${icon}`}
      width={width}
      height={height}
      color={color}
      alt={alt}
    />
  );
};
