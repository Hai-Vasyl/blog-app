import React from "react";
import { ComponentProps } from "../component";
import { Link as NavigationLink } from "react-router-dom";

type LinkProps = ComponentProps & {
  to: string;
};

export const Link: React.FC<LinkProps> = ({ to, ...props }) => {
  return <NavigationLink {...props} to={to} />;
};
