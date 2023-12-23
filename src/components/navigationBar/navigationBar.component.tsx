import React from "react";
import { NavigationButtonComponent } from "./components";
import { AvatarComponent } from "../avatar";
import { LogoComponent } from "../logo";
import styles from "./navigationBar.module.scss";
import { useStore } from "../../redux";
import { activateModal } from "../modal";

const fetchUserData = {
  color: "#32a852",
  email: "some.random@gmail.com",
};

export const NavigationBarComponent = () => {
  const { dispatch } = useStore();

  const handleOpenCategoryModal = () => {
    dispatch(
      activateModal(<div>some text here Lorem ipsum dolor site amet</div>)
    );
    console.log("Category modal has been opened");
  };

  const handleOpenTagsModal = () => {
    console.log("Category modal has been opened");
  };

  const handleOpenSearchModal = () => {
    console.log("Category modal has been opened");
  };

  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <LogoComponent />
        <div className={styles.buttons}>
          <NavigationButtonComponent
            label="Category"
            isActivated
            onClick={handleOpenCategoryModal}
          />
          <NavigationButtonComponent
            label="Tags"
            isActivated={false}
            onClick={handleOpenTagsModal}
          />
          <NavigationButtonComponent
            label="Search"
            isActivated={false}
            onClick={handleOpenSearchModal}
          />
        </div>
        <AvatarComponent
          color={fetchUserData.color}
          email={fetchUserData.email}
        />
      </div>
    </div>
  );
};
