import React, { useContext } from "react";
import { CONTEXT } from "../../../App";

export default function Toggle() {
  //console.log(CONTEXT);
  const { theme, setTheme } = useContext(CONTEXT);

  // console.log(theme);

  function handleToggleClicked(e) {
    e.target.classList.toggle("active");
  }
  return (
    <div className="theme-toggle">
      <p>Light Mode</p>
      <div
        className="toggle-btn"
        onClick={(e) => {
          setTheme(!theme);
          handleToggleClicked(e);
        }}
      ></div>
    </div>
  );
}
