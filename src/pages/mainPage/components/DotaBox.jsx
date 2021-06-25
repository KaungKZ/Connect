import React, { useContext } from "react";

import { CONTEXT_API } from "../MainApp";
import dotaImg from "../../../images/dota.png";

export default function DotaBox() {
  const context_values = useContext(CONTEXT_API);

  const { dotaValues } = context_values;
  return (
    <div className="dashboard-container dota-dashboard-container">
      <div className="title">
        <img src={dotaImg} alt="" className="game-img" />
        <span className="game-username">{dotaValues.profile.username}</span>
      </div>

      <div className="box dota-box">
        <div className="dota-profile box-column">
          <div className="box-title">
            <p>Profile</p>
          </div>
          <div className="box-content">
            <p className="username">{dotaValues.profile.username}</p>

            <img
              src={dotaValues.profile.avatar_url}
              alt=""
              className="avatar-img"
            />
            <a
              href={dotaValues.profile.profile_link}
              className="go-to-profile-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to profile
            </a>
          </div>
        </div>
        <div className="dota-rank box-column">
          <div className="box-title">
            <p>Estimated mmr</p>
          </div>
          <div className="box-content">
            <p>
              {dotaValues.rank}
              <span className="value-title">mmr</span>
            </p>
          </div>
        </div>
        <div className="dota-total-matches box-column">
          <div className="box-title">
            <p>Matches</p>
          </div>
          <div className="box-content">
            <div className="wins">
              <span>Wins</span>
              <span>{dotaValues.matches.win}</span>
            </div>
            <div className="loses">
              <span>Loses</span>
              <span>{dotaValues.matches.lose}</span>
            </div>
          </div>
        </div>
        <div className="dota-recent-match box-column">
          <div className="box-title">
            <p>Recent Match</p>
          </div>
          <div className="box-content">
            <span
              className={`status ${
                dotaValues.recent_match.status ? "radiant" : "dire"
              }`}
            >
              {dotaValues.recent_match.status ? "Radiant" : "Dire"}
              <span className="value-title">wins</span>
            </span>
            <span className="hero">{dotaValues.recent_match.hero}</span>
            <span className="duration">
              {dotaValues.recent_match.duration}
              <span className="value-title">min</span>
            </span>
            <span className="match-ID">
              {dotaValues.recent_match.matchID}{" "}
              <span className="value-title">match ID</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
