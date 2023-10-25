import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export const ToggleDarkMode: React.FC = () => {
  const darkModeClassName = "dark";
  const [isDarkMode, setIsDarkMode] = React.useState(
    document.body.classList.contains(darkModeClassName)
  );
  const toggleDarkMode = (checked: boolean) => {
    setIsDarkMode(checked);
    if (checked) {
      document.body.classList.add(darkModeClassName);
    } else {
      document.body.classList.remove(darkModeClassName);
    }
  };

  return (
    <div>
      <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} />
    </div>
  );
};
