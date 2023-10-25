import React from "react";
import { ToggleDarkMode } from "../ToggleDarkMode";
import styles from "./style.module.css";

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <span>Gallery</span>
      <ToggleDarkMode />
    </div>
  );
};
