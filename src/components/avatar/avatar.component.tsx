import React from "react";
import styles from "./avatar.module.scss";

type AvatarComponentProps = {
  email: string;
  color: string;
};

export const AvatarComponent: React.FC<AvatarComponentProps> = ({
  email,
  color,
}) => {
  return (
    <div style={{ backgroundColor: color }} className={styles.container}>
      <div className={styles.email}>{email}</div>
    </div>
  );
};
