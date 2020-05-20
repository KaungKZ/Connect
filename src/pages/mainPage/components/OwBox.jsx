import React, { useContext } from "react";
import { CONTEXT_API } from "../MainApp";
import owImg from "../../../images/OW.png";

export default function OwBox() {
  const context_values = useContext(CONTEXT_API);

  const { owValues, ow_username } = context_values;

  // console.log(owValues);
  return (
    <div className="dashboard-container ow-dashboard-container">
      <div className="title">
        <img src={owImg} alt="" className="game-img" />
        <p className="game-username">{ow_username.replace(/-/g, "#")}</p>
      </div>
      <div className="box ow-box">
        <div className="ow-profile box-column">
          <div className="box-title">
            <p>Profile</p>
          </div>
          <div className="box-content">
            <span className="username">{owValues.profile.name}</span>
            <span className="level">
              {owValues.profile.level}
              <span className="value-title">(lvl)</span>
            </span>
            <img
              src={owValues.profile.portrait}
              alt=""
              className="profile-img"
            />
          </div>
        </div>
        <div className="ow-playtime box-column">
          <div className="box-title">
            <p>Playtime</p>
          </div>
          <div className="box-content">
            <span className="playtime-competitive">
              {owValues.playtime.competitive}
              <span className="value-title">competitive</span>
            </span>
            <span className="playtime-quickplay">
              {owValues.playtime.quickplay}
              <span className="value-title">quickplay</span>
            </span>
          </div>
        </div>
        <div className="ow-activities box-column">
          <div className="box-title">
            <p>Matches</p>
          </div>
          <div className="box-content">
            <span className="competitive-matches">
              {owValues.matches_won.competitive}
              <span className="value-title">competitive</span>
            </span>
            <span className="quickplay-matches">
              {owValues.matches_won.quickplay}
              <span className="value-title">quickplay</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
