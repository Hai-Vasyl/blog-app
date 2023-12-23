import React from "react";
import styles from "./modal.module.scss";
import { useStore } from "../../redux";
import { deactivateModal } from "./modal.slice";

export const ModalComponent = () => {
  const {
    dispatch,
    state: { modal },
  } = useStore();

  const handleCloseModal = () => {
    dispatch(deactivateModal());
  };

  return (
    <div
      className={`${styles.container} ${
        modal.active && styles["container--active"]
      }`}
      onClick={handleCloseModal}
    >
      <div
        className={`${styles.modal} ${modal.active && styles["modal--active"]}`}
      >
        {modal.Element}
      </div>
    </div>
  );
};
