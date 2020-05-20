import React, { useContext } from "react";
import { CONTEXT_API } from "../MainApp";
import csgoImg from "../../../images/csgo.png";

export default function CsgoBox() {
  const context_values = useContext(CONTEXT_API);

  const { csgoValues } = context_values;

  // console.log(csgoValues);

  return (
    <div className="dashboard-container csgo-dashboard-container">
      <div className="title">
        <img src={csgoImg} alt="" className="game-img" />
        <p className="game-username">{csgoValues.profile.username}</p>
      </div>
      <div className="box csgo-box">
        <div className="csgo-profile box-column">
          <div className="box-title">
            <p>Profile</p>
          </div>
          <div className="box-content">
            <span className="username">{csgoValues.profile.username}</span>
            <img src={csgoValues.profile.profile_url} alt="" />
          </div>
        </div>
        <div className="csgo-overview box-column">
          <div className="box-title">
            <p>Overview</p>
          </div>
          <div className="box-content">
            <span className="kills">
              {csgoValues.overview.kills}
              <span className="value-title">kills</span>
            </span>
            <span className="headshot-percentage">
              {csgoValues.overview.headshot_percentage}
              <span className="value-title">HS %</span>
            </span>
            <span className="k_d">
              {csgoValues.overview.kill_Death_Ratio}
              <span className="value-title">k/d</span>
            </span>
            <span className="times-played">
              {csgoValues.overview.timesPlayed}
              <span className="value-title">played</span>
            </span>
          </div>
        </div>
        <div className="csgo-matches box-column">
          <div className="box-title">
            <p>Matches</p>
          </div>
          <div className="box-content">
            <span className="total-matches">
              {csgoValues.matches.total}
              <span className="value-title">total</span>
            </span>
            <span className="total-wins">
              {csgoValues.matches.wins}
              <span className="value-title">wins</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
