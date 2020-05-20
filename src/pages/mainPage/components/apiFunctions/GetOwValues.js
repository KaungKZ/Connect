// import React from "react";
import axios from "axios";
export default function GetOwValues(
  setIsOwPlayerFound,
  setIsOwLoading,
  setOwValues,
  ow_username,
  ow_platform,
  ow_region
) {
  // console.log(ow_username, ow_platform, ow_region);
  // Overwatch (SUCCESS) (1st API)
  const proxy_URL = "https://cors-anywhere.herokuapp.com/";
  //
  axios
    .get(
      proxy_URL +
        `https://best-overwatch-api.herokuapp.com/player/${ow_platform}/${ow_region}/${ow_username}`
    )
    .then((res) => {
      // console.log(res.data);
      if (!res.data || Object.keys(res.data).length === 0) {
        console.log("ow not found");
        setIsOwPlayerFound(false);
        setIsOwLoading(false);
        return;
      }

      setIsOwPlayerFound(true);

      const item = res.data;
      setOwValues((prev) => {
        return {
          ...prev,
          profile: {
            name: item.username,
            level: item.level,
            portrait: item.portrait,
          },
          playtime: {
            competitive: item.playtime.competitive
              ? item.playtime.competitive
              : null,
            quickplay: item.playtime.quickplay ? item.playtime.quickplay : null,
          },
          matches_won: {
            competitive: item.games.competitive.won
              ? item.games.competitive.won
              : null,
            quickplay: item.games.quickplay.won
              ? item.games.quickplay.won
              : null,
          },
        };
      });

      setIsOwLoading(false);
      // setIsPlayerFound((prev) => {
      //   return [
      //     ...prev,
      //     {
      //       value: "ow",
      //       playerFound: true,
      //     },
      //   ];
      // });
      // console.log(res);
    })
    .catch((err) => {
      if (err.response) {
        setIsOwPlayerFound(false);
        setIsOwLoading(false);
        console.log(err.response.data);
      }
    });

  // Overwatch (2nd API)
  // console.log(isDotaLoading, isFortniteLoading);
}
