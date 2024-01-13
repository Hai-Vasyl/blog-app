import React from "react";
import styles from "./avatar.module.scss";
import { View } from "../base-components/view";

type AvatarProps = {
  email: string;
  color: string;
};

export const Avatar: React.FC<AvatarProps> = ({ email, color }) => {
  return (
    <View style={{ backgroundColor: color }} className={styles.container}>
      <View className={styles.email}>{email}</View>
    </View>
  );
};
