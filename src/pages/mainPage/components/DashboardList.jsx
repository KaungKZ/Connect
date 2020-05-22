import React, { useContext } from "react";
import { CONTEXT_API } from "../MainApp";
import PlayerNotFound from "./PlayerNotFound";

import DotaBox from "./DotaBox";
import FortniteBox from "./FortniteBox";
import OwBox from "./OwBox";
import CsgoBox from "./CsgoBox";

export default function DashboardList({ val, i }) {
  const context_values = useContext(CONTEXT_API);

  const { areAllValuesReady, uniqueActiveValues, activeCards } = context_values;

  const name = val.split("I")[0];

  return (
    <>
      <div
        className={`dashboard dashboard-${name} ${
          areAllValuesReady && activeCards.length === uniqueActiveValues.length
            ? "loading-remove"
            : "loading-active"
        }`}
      >
        {/* // check if values of the box are ready  */}
        {areAllValuesReady &&
        activeCards.length === uniqueActiveValues.length ? (
          // check if player is found or not
          !uniqueActiveValues[i].isPlayerFound ? (
            <PlayerNotFound name={name}></PlayerNotFound>
          ) : name === "dota" ? (
            <DotaBox></DotaBox>
          ) : name === "fortnite" ? (
            <FortniteBox></FortniteBox>
          ) : name === "ow" ? (
            <OwBox></OwBox>
          ) : (
            <CsgoBox></CsgoBox>
          )
        ) : undefined}
      </div>
    </>
  );
}
