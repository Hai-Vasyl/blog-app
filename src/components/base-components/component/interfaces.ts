import { PropsWithChildren } from "react";

export type ComponentProps = PropsWithChildren<{
  className?: string;
  style?: React.CSSProperties | undefined;
  onClick?: () => void;
}>;
