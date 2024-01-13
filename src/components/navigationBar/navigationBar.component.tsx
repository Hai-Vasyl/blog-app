import React from "react";
import { NavigationButton } from "./components";
import { Avatar } from "../avatar";
import { Logo } from "../logo";
import styles from "./navigationBar.module.scss";
import { ModalTypes, activateModal } from "../modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { View } from "../base-components";

const fetchUserData = {
  color: "#32a852",
  email: "some.random@gmail.com",
};

export const NavigationBar = () => {
  const dispatch = useDispatch();
  const modalState: RootState["modal"] = useSelector(({ modal }) => modal);

  const handleOpenCategoryModal = () => {
    dispatch(
      activateModal({
        Element: <div>some text here Lorem ipsum dolor site amet</div>,
        type: ModalTypes.categorySelect,
      })
    );
  };

  const handleOpenTagsModal = () => {
    console.log("Category modal has been opened");
  };

  const handleOpenSearchModal = () => {
    console.log("Category modal has been opened");
  };

  return (
    <View className={styles.container}>
      <View className={styles.navigation}>
        <Logo />
        <View className={styles.buttons}>
          <NavigationButton
            label="Category"
            isActive={modalState.type === ModalTypes.categorySelect}
            onClick={handleOpenCategoryModal}
          />
          <NavigationButton
            label="Search"
            isActive={modalState.type === ModalTypes.stringSearch}
            onClick={handleOpenSearchModal}
          />
          <NavigationButton
            label="Tags"
            isActive={modalState.type === ModalTypes.tagSearch}
            onClick={handleOpenTagsModal}
          />
        </View>
        <Avatar color={fetchUserData.color} email={fetchUserData.email} />
      </View>
    </View>
  );
};
