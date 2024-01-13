import React from "react";
import { Span } from "../span";
import { ComponentProps } from "../component";
import { joinClass } from "../../../helpers";

export enum IconNames {
  search = "search",
}

type IconProps = ComponentProps & {
  name: IconNames;
};

export const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  return (
    <Span
      {...props}
      className={joinClass("material-symbols-outlined", props.className)}
    >
      {name}
    </Span>
  );
};
