import React from "react";
import image from "./vh-logo.png";
import styles from "./logo.module.scss";
import { Link } from "react-router-dom";
import { Routes } from "../router";

export const LogoComponent = () => {
  return (
    <Link className={styles.container} to={Routes.home}>
      <img src={image} alt="logo" />
    </Link>
  );
};
