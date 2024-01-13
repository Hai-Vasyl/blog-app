import React from "react";
import { ComponentProps } from "../component";

type ViewProps = ComponentProps;

export const View: React.FC<ViewProps> = (props) => {
  return <div {...props} />;
};
