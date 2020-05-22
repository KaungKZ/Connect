import React, { useContext, useEffect, useState } from "react";
import header_bg from "../../../images/home bg shape.svg";
import { CONTEXT } from "../../../App";

export default function Header() {
  const { theme } = useContext(CONTEXT);
  const [logoColorChange, setLogoColorChange] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 620) {
      setLogoColorChange(true);
    } else {
      setLogoColorChange(false);
    }
  }, [theme]);

  return (
    <header className="home-header">
      <div className="container">
        <div className="logo">
          <svg
            width="63"
            height="17"
            viewBox="0 0 63 17"
            fill="none"
            className={`logo-icon ${
              logoColorChange ? "logo-change" : "logo-doesnt-change"
            }`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8.5" cy="8.5" r="8.5" fill="white" />
            <circle cx="31" cy="8" r="5" fill="white" />
            <circle cx="54.5" cy="8.5" r="8.5" fill="white" />
          </svg>
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
