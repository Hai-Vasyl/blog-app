import React from "react";
import styles from "./navigationButton.module.scss";
import { Button } from "../base-components";
import { ComponentProps } from "../base-components/component";
import { joinClass } from "../../helpers";

type NavigationButtonProps = ComponentProps & {
  label: string;
  isActive: boolean;
};

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  label,
  isActive,
  ...props
}) => {
  return (
    <Button
      {...props}
      className={joinClass(
        styles.container,
        isActive && styles["container--active"]
      )}
    >
      {label}
    </Button>
  );
};
