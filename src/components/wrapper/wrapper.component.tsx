import React, { PropsWithChildren } from "react";
import { NavigationBarComponent } from "../navigationBar";
import styles from "./wrapper.module.scss";

export const WrapperComponent: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <NavigationBarComponent />
      <div className={styles.page}>{children}</div>
    </div>
  );
};
