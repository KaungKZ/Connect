import React, { useContext } from "react";
import { CONTEXT } from "../../../App";
import lightmodeImg from "../../../images/light-mode-icon.svg";

export default function Toggle() {
  const { theme, setTheme } = useContext(CONTEXT);

  const checked = theme.checked;

  function handleThemeChange(e) {
    if (checked === false) {
      localStorage.setItem("theme", "light");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));

      setTheme({
        checked: true,
      });
    } else {
      localStorage.setItem("theme", "dark");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      setTheme({
        checked: false,
      });
    }
  }
  return (
    <div className="theme-toggle" title="Toggle theme">
      <label className="toggle-btn">
        <input
          type="checkbox"
          onChange={handleThemeChange}
          defaultChecked={theme.checked}
        />
        <span className="circle round"></span>
        <img
          src={lightmodeImg}
          alt=""
          className={`icon ${theme.checked ? "left" : "right"}`}
        />
      </label>
    </div>
  );
}
