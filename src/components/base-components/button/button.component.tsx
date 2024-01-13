import React from "react";
import { ComponentProps } from "../component";

type ButtonProps = ComponentProps & {};

export const Button: React.FC<ButtonProps> = (props) => {
  return <button {...props} />;
};
