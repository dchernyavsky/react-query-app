import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export const ToggleDarkMode: React.FC = () => {
  const darkModeClassName = "dark";
  const [isDarkMode, toggleDarkMode] = React.useReducer(
    (currentState: boolean, newState: boolean) => {
      if (newState) {
        document.body.classList.add(darkModeClassName);
      } else {
        document.body.classList.remove(darkModeClassName);
      }
      return newState;
    },
    Boolean(
      window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    )
  );

  React.useEffect(() => {
    toggleDarkMode(isDarkMode);
  }, []);

  return (
    <div>
      <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} />
    </div>
  );
};
