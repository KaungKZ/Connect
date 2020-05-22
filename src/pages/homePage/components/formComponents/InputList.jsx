import React, { useContext, useEffect } from "react";
import dota from "../../../../images/dota.png";
import fortnite from "../../../../images/fortnite.png";
import ow from "../../../../images/OW.png";
import csgo from "../../../../images/csgo.png";
import AdditionalOptions from "./AdditionalOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { CONTEXT } from "../MainContent";

import ErrorMsgBox from "./ErrorMsgBox";

export default function InputList({ i }) {
  const context_values = useContext(CONTEXT);
  let ImgsArr = [dota, fortnite, ow, csgo];
  let classNameArr = ["dota", "fortnite", "ow", "csgo"];

  const {
    areInputsEmpty,
    setAreInputsEmpty,
    focusOnFortnite,
    setFocusOnFortnite,
    focusOnOw,
    setFocusOnOw,
    bothFocus,
    setBothFocus,
  } = context_values;

  useEffect(() => {
    let inputs = document.querySelectorAll(".connect-box .username-input");

    if (focusOnFortnite) {
      inputs[1].focus();
      setFocusOnFortnite(false);
    } else if (focusOnOw) {
      inputs[2].focus();
      setFocusOnOw(false);
    } else if (bothFocus) {
      inputs[1].focus();
      setBothFocus(false);
    } else {
      return;
    }
  }, [
    focusOnFortnite,
    setFocusOnFortnite,
    focusOnOw,
    setFocusOnOw,
    bothFocus,
    setBothFocus,
  ]);

  return (
    <div className={`input input-${classNameArr[i]}`}>
      <img src={ImgsArr[i]} alt="" />
      <div className="wrapper-input">
        <input
          type="text"
          className={`username-input ${classNameArr[i]}-username`}
          autoComplete="off"
          onFocus={() => setAreInputsEmpty(false)}
          minLength={i === 0 ? "2" : "0"}
          maxLength={i === 0 ? "32" : "100"}
          required
        />
        <label className="input-label">
          <span className="username">
            {`Enter ${
              i === 0
                ? "Dota 2 ID"
                : i === 1
                ? "Epic Games username"
                : i === 2
                ? "Battlenet tag"
                : "Steam ID / Steam profile link"
            }`}
          </span>
        </label>

        {i === 2 && (
          <div
            className="note"
            data-tooltip="PC users should enter the full BattleTag with numeric ID, such as RealReaper#12345.
          XBOX and PSN users should enter the full case-sensitive name, such as Real Reaper"
          >
            <FontAwesomeIcon
              icon={faExclamationCircle}
              style={{ fontSize: "20px" }}
              className="note-icon"
            ></FontAwesomeIcon>
          </div>
        )}

        <AdditionalOptions i={i}></AdditionalOptions>
        {areInputsEmpty && <ErrorMsgBox forWhat={"allEmpty"}></ErrorMsgBox>}
      </div>
    </div>
  );
}
