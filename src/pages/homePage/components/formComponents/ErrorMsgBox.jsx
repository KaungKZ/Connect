import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";

export default function ErrorMsgBox({ forWhat }) {
  return (
    <div
      className={forWhat === "radioErr" ? "radio-btn-error" : "all-empty-error"}
    >
      <FontAwesomeIcon
        icon={faExclamationTriangle}
        className="warning-icon"
      ></FontAwesomeIcon>
      <p>Please choose one of the options</p>

      <FontAwesomeIcon
        icon={faCaretLeft}
        className="triangle"
      ></FontAwesomeIcon>
    </div>
  );
}
