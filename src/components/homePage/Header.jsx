import React, { useContext } from "react";
import logo from "../../images/logo.png";
import header_bg from "../../images/home bg shape.svg";
import { CONTEXT } from "../../App";

export default function Header() {
  // console.log(CONTEXT);
  const { theme, setTheme } = useContext(CONTEXT);

  // console.log(values);

  // useEffect(() => {
  //   theme
  //     ? headerRef.current.classList.add("light-mode")
  //     : headerRef.current.classList.remove("light-mode");
  // }, [theme]);

  // function toggleTheme() {
  //   if (theme) {
  //     headerRef.current.classList.add("light-mode");
  //   } else {
  //     console.log(headerRef.current);

  //   }
  // }

  // toggleTheme();

  // if (theme) {
  //   document.body.style.background = "#fdfdfd";
  // }

  // console.log(contextTheme);

  function handleToggleClicked(e) {
    e.target.classList.toggle("active");
  }

  return (
    <header className={theme ? "light-mode" : undefined}>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

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
      </div>
      <div className="share-text">
        <a href="https://twitter.com/KaungKZ2000">Share</a>
      </div>
      <div className="header-bg">
        <img src={header_bg} alt="" />
      </div>
    </header>
  );
}
