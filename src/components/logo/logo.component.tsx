import React from "react";
import image from "./vh-logo.png";
import styles from "./logo.module.scss";
import { Routes } from "../router";
import { Image, Link } from "../base-components";

export const Logo = () => {
  return (
    <Link className={styles.container} to={Routes.home}>
      <Image src={image} alt="logo" />
    </Link>
  );
};
