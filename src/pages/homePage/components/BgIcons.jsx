import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faSteam } from "@fortawesome/free-brands-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faXbox } from "@fortawesome/free-brands-svg-icons";

export default function Bg_icons() {
  return (
    <div className="bg-icons">
      <div className="icon icon-1">
        <FontAwesomeIcon icon={faHeadset} className="fa-icon"></FontAwesomeIcon>
      </div>
      <div className="icon icon-2">
        <FontAwesomeIcon icon={faSteam} className="fa-icon"></FontAwesomeIcon>
      </div>
      <div className="icon icon-3">
        <FontAwesomeIcon icon={faGamepad} className="fa-icon"></FontAwesomeIcon>
      </div>
      <div className="icon icon-4">
        <FontAwesomeIcon icon={faXbox} className="fa-icon"></FontAwesomeIcon>
      </div>
      <div className="icon icon-5">
        <FontAwesomeIcon icon={faHeadset} className="fa-icon"></FontAwesomeIcon>
      </div>
      <div className="icon icon-6">
        <FontAwesomeIcon icon={faSteam} className="fa-icon"></FontAwesomeIcon>
      </div>
      <div className="icon icon-7">
        <FontAwesomeIcon icon={faGamepad} className="fa-icon"></FontAwesomeIcon>
      </div>
      <div className="icon icon-8">
        <FontAwesomeIcon icon={faXbox} className="fa-icon"></FontAwesomeIcon>
      </div>
    </div>
  );
}
