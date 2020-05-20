import React, { useContext } from "react";
//import facebook from "../../../images/facebook.png";
import { CONTEXT_API } from "../MainApp";
// import BoxValues from "./BoxValues";
import PlayerNotFound from "./PlayerNotFound";

import DotaBox from "./DotaBox";
import FortniteBox from "./FortniteBox";
import OwBox from "./OwBox";
import CsgoBox from "./CsgoBox";

export default function DashboardList({ val, i }) {
  // console.log(val);
  // console.log(val);
  const context_values = useContext(CONTEXT_API);

  // const [playerstatus, setPlayerStatus] = useState();

  const {
    areAllValuesReady,
    uniqueActiveValues,
    activeCards,

    // inputsValues
  } = context_values;

  // console.log(areAllValuesReady);

  // console.log(val);
  // console.log(uniqueActiveValues);

  const name = val.split("I")[0];

  // activeCards.push(
  //   activeCards.splice(
  //     activeCards.findIndex((v) => v === "csgoInputs"),
  //     1
  //   )[0]
  // );

  // console.log(activeCards);

  return (
    <>
      {/* {activeCards.length === uniqueActiveValues.length} */}
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
