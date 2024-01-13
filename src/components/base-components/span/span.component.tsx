import React from "react";
import { ComponentProps } from "../component";

type SpanProps = ComponentProps;

export const Span: React.FC<SpanProps> = (props) => {
  return <span {...props} />;
};
