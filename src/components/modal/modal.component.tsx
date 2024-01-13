import React from "react";
import styles from "./modal.module.scss";
import { RootState } from "../../redux";
import { deactivateModal } from "./modal.slice";
import { useDispatch, useSelector } from "react-redux";
import { View } from "../base-components";
import { joinClass } from "../../helpers";

export const Modal = () => {
  const dispatch = useDispatch();
  const modalState: RootState["modal"] = useSelector(({ modal }) => modal);

  const handleCloseModal = () => {
    dispatch(deactivateModal());
  };

  return (
    <View
      className={joinClass(
        styles.container,
        modalState.active && styles["container--active"]
      )}
      onClick={handleCloseModal}
    >
      <View
        className={joinClass(
          styles.modal,
          modalState.active && styles["modal--active"]
        )}
      >
        {modalState.Element}
      </View>
    </View>
  );
};
