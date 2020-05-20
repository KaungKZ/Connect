import React, { useEffect, useState, createContext } from "react";
// import "../../css/mainPage.scss";
import Header from "./components/Header";
import Boxes from "./components/Boxes";
import GoBackBtn from "./components/GoBackBtn";
// import { CONTEXT } from "../../App";
// import axios from "axios";

// import GetDotaValues from "./components/GetDotaValues";

import GetDotaValues from "./components/apiFunctions/GetDotaValues.js";
import GetFortniteValues from "./components/apiFunctions/GetFortniteValues";
import GetOwValues from "./components/apiFunctions/GetOwValues";
import GetCsgoValues from "./components/apiFunctions/GetCsgoValues";

export const CONTEXT_API = createContext();
// import Axios from "axios";

export default function MainApp(props) {
  // const [dotaHeroName, setDotaHeroName] = useState(null);

  const [isDotaLoading, setIsDotaLoading] = useState(true);
  const [isFortniteLoading, setIsFortniteLoading] = useState(true);
  const [isOwLoading, setIsOwLoading] = useState(true);

  const [uniqueActiveValues, setUniqueActiveValues] = useState();

  // console.log(uniqueActiveValues);

  const [isCsgoLoading, setIsCsgoLoading] = useState(true);
  const [areAllValuesReady, setAreAllValuesReady] = useState(false);

  const [activeValues, setActiveValues] = useState([]);

  // console.log(activeValues);

  const [activeCards, setActiveCards] = useState([]);

  const [isDotaPlayerFound, setIsDotaPlayerFound] = useState(null);
  const [isFortnitePlayerFound, setIsFortnitePlayerFound] = useState(null);
  const [isOwPlayerFound, setIsOwPlayerFound] = useState(null);
  const [isCsgoPlayerFound, setIsCsgoPlayerFound] = useState(null);

  // console.log(isDotaPlayerFound, isCsgoPlayerFound);

  const [dotaValues, setDotaValues] = useState({});

  // console.log(dotaValues);

  const [fortniteValues, setFortniteValues] = useState({});

  // console.log(fortniteValues);

  const [owValues, setOwValues] = useState({});

  const [csgoValues, setCsgoValues] = useState({});

  // console.log(csgoValues);
  // console.log(owValues);

  const inputsValues = props.location.state;
  // const { theme, setTheme } = useContext(CONTEXT);
  const { dotaInputs, fortniteInputs, owInputs, csgoInputs } = inputsValues;

  // console.log(isDotaLoading, isDotaPlayerFound);

  const { username: dota_username } = dotaInputs;
  const {
    username: fortnite_username,
    platform: fortnite_platform,
  } = fortniteInputs;

  const {
    username: ow_username,
    platform: ow_platform,
    region: ow_region,
  } = owInputs;

  const { username: csgo_username } = csgoInputs;

  // console.log(owValues);

  useEffect(() => {
    //   // console.log(inputsValues);
    for (let i in inputsValues) {
      if (inputsValues[i].username) {
        setActiveCards((prev) => {
          return [...prev, i].sort();
        });
      }
    }
  }, [inputsValues]);

  useEffect(() => {
    for (let i in inputsValues) {
      if (inputsValues[i].username) {
        setActiveValues((prev) => {
          return [
            ...prev,
            {
              value: i,
              isPlayerFound: (() => {
                if (i.includes("fortnite")) {
                  return isFortnitePlayerFound;
                } else if (i.includes("dota")) {
                  return isDotaPlayerFound;
                } else if (i.includes("ow")) {
                  return isOwPlayerFound;
                } else {
                  return isCsgoPlayerFound;
                }
              })(),
            },
          ];
        });
      }
    }
  }, [
    inputsValues,
    isDotaPlayerFound,
    isFortnitePlayerFound,
    isOwPlayerFound,
    isCsgoPlayerFound,
  ]);

  useEffect(() => {
    function getUniqueArray(arr = [], compareProps = []) {
      let modifiedArray = [];
      if (compareProps.length === 0 && arr.length > 0)
        compareProps.push(...Object.keys(arr[0]));
      arr.map((item) => {
        if (modifiedArray.length === 0) {
          modifiedArray.push(item);
        } else {
          if (
            !modifiedArray.some((item2) =>
              compareProps.every(
                (eachProps) => item2[eachProps] === item[eachProps]
              )
            )
          ) {
            modifiedArray.push(item);
          }
        }
      });
      return modifiedArray.sort(compare);
    }
    function compare(a, b) {
      // Use toUpperCase() to ignore character casing
      const bandA = a.value.toUpperCase();
      const bandB = b.value.toUpperCase();

      let comparison = 0;
      if (bandA > bandB) {
        comparison = 1;
      } else if (bandA < bandB) {
        comparison = -1;
      }
      return comparison;
    }
    const filteredActiveValues = activeValues.filter(
      (el) => el.isPlayerFound !== null
    );

    // console.log(filteredActiveValues);
    setUniqueActiveValues(getUniqueArray(filteredActiveValues));

    // const uniqueActiveValues = getUniqueArray(filteredActiveValues);

    // console.log(uniqueActiveValues);
  }, [activeValues]);

  useEffect(() => {
    if (!dota_username) {
      setIsDotaLoading(false);

      return;
    }

    GetDotaValues(
      dota_username,
      setDotaValues,
      setIsDotaLoading,
      setIsDotaPlayerFound
    );
  }, [dota_username]);

  useEffect(() => {
    if (!fortnite_username) {
      setIsFortniteLoading(false);
      return;
    }

    GetFortniteValues(
      fortnite_username,
      fortnite_platform,
      setFortniteValues,
      setIsFortniteLoading,
      setIsFortnitePlayerFound
    );
  }, [fortnite_platform, fortnite_username]);

  useEffect(() => {
    if (!ow_username) {
      setIsOwLoading(false);
      return;
    }
    GetOwValues(
      setIsOwPlayerFound,
      setIsOwLoading,
      setOwValues,
      ow_username,
      ow_platform,
      ow_region
    );
  }, [ow_username, ow_platform, ow_region]);

  useEffect(() => {
    if (!csgo_username) {
      setIsCsgoLoading(false);
      return;
    }

    GetCsgoValues(
      setIsCsgoLoading,
      setIsCsgoPlayerFound,
      setCsgoValues,
      csgo_username
    );
  }, [csgo_username]);

  useEffect(() => {
    if (
      !isDotaLoading &&
      !isFortniteLoading &&
      !isOwLoading &&
      !isCsgoLoading
    ) {
      setAreAllValuesReady(true);
    }
  }, [isDotaLoading, isFortniteLoading, isOwLoading, isCsgoLoading]);

  const context_values = {
    dotaValues,
    fortniteValues,
    owValues,
    csgoValues,
    areAllValuesReady,
    uniqueActiveValues,
    activeValues,
    activeCards,
    ow_username,
  };

  return (
    <>
      <CONTEXT_API.Provider value={context_values}>
        <Header></Header>
        <Boxes></Boxes>
        {areAllValuesReady &&
          activeCards.length === uniqueActiveValues.length && (
            <GoBackBtn></GoBackBtn>
          )}
      </CONTEXT_API.Provider>
    </>
  );
}
