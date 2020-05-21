import React, { useContext } from "react";
import logo from "../../../images/logo.png";
import header_bg from "../../../images/home bg shape.svg";
import { CONTEXT } from "../../../App";

export default function Header() {
  // console.log(CONTEXT);

  const { theme } = useContext(CONTEXT);

  // console.log(theme);

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

  // function handleToggleClicked(e) {
  //   e.target.classList.toggle("active");
  // }

  return (
    <header className={`home-header ${theme ? "light-mode" : ""}`}>
      <div className="container">
        <div className="logo">
          {/* <img src={logo} alt="" /> */}
          <svg
            width="63"
            height="17"
            viewBox="0 0 63 17"
            fill="none"
            className="logo-icon"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8.5" cy="8.5" r="8.5" fill="white" />
            <circle cx="31" cy="8" r="5" fill="white" />
            <circle cx="54.5" cy="8.5" r="8.5" fill="white" />
          </svg>
        </div>

        {/* <div className="theme-toggle">
          <p>Light Mode</p>
          <div
            className="toggle-btn"
            onClick={(e) => {
              setTheme(!theme);
              handleToggleClicked(e);
            }}
          ></div>
        </div> */}
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
