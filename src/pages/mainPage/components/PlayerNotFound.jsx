import React from "react";
import { Link } from "react-router-dom";
import notFoundImg from "../../../images/not-found.svg";

export default function PlayerNotFound({ name }) {
  return (
    <div className={`player-not-found ${name}`}>
      <div className="icon">
        <img src={notFoundImg} alt="" />
      </div>
      <div className="text">
        <p>The player you searched for {name} doesn't seem to exist.</p>
        <p>
          Make sure to enable game details to public or
          <span className="back-to-home-link">
            <Link to="/">try with another username</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
