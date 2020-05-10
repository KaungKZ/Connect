import React, { useContext } from "react";
import { CONTEXT } from "../../../App";

export default function Header() {
  const { theme } = useContext(CONTEXT);
  return (
    <header className={`dashboard-header ${theme ? "light-mode" : ""}`}>
      <div className="container">
        <div className="title">Overview</div>
        <div className="total-count">Total: 72k followers</div>
      </div>
    </header>
  );
}
