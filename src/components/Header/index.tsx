import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import styles from "./style.module.css";

export const Header: React.FC = () => {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    if (checked) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <div className={styles.header}>
      <span>Gallery</span>
      <div>
        <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} />
      </div>
    </div>
  );
};
