import React from "react";
import styles from "./navigationButton.module.scss";

type NavigationButtonComponentProps = {
  label: string;
  isActivated: boolean;
  onClick: () => void;
};

export const NavigationButtonComponent: React.FC<
  NavigationButtonComponentProps
> = ({ label, isActivated, onClick }) => {
  return (
    <button
      className={`${styles.container} ${
        isActivated && styles["container--active"]
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
