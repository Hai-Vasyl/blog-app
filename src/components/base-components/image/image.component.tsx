import React from "react";
import { ComponentProps } from "../component";

type ImageProps = ComponentProps & {
  src: string;
  alt: string;
};

export const Image: React.FC<ImageProps> = ({ src, alt, ...props }) => {
  return <img {...props} src={src} alt={alt} />;
};
