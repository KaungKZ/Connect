import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function GoBackBtn() {
  return (
    <Link to="/">
      <div className="go-back">
        <div className="wrapper-icon">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="icon"
          ></FontAwesomeIcon>
        </div>
      </div>
    </Link>
  );
}
