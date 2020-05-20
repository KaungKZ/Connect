// import React from "react";
import axios from "axios";

export default function GetCsgoValues(
  setIsCsgoLoading,
  setIsCsgoPlayerFound,
  setCsgoValues,
  csgo_username
) {
  // console.log(csgo_username);
  // console.log(csgo_username);
  const proxy_URL = "https://cors-anywhere.herokuapp.com/";
  const tracker_API_key = "2262ffae-2839-4fe9-b8da-1b1630e8b176";

  // console.log(csgo_username);
  axios
    .get(
      proxy_URL +
        `https://public-api.tracker.gg/v2/csgo/standard/profile/steam/${csgo_username}`,
      {
        headers: {
          "TRN-Api-Key": tracker_API_key,
          Accept: "application/json",
          // "Accept-Encoding": "gzip",
        },
      }
    )
    .then((res) => {
      setIsCsgoPlayerFound(true);

      const item = res.data.data;
      const stats = res.data.data.segments[0].stats;

      // console.log(stats);

      setCsgoValues({
        profile: {
          username: item.platformInfo.platformUserHandle,
          profile_url: item.platformInfo.avatarUrl,
        },
        overview: {
          kills: stats.kills.displayValue,
          headshot_percentage: stats.headshotPct.displayValue,
          kill_Death_Ratio: stats.kd.displayValue,
          timesPlayed: stats.timePlayed.displayValue,
        },
        matches: {
          total: stats.matchesPlayed.displayValue,
          wins: stats.wins.displayValue,
        },
      });

      setIsCsgoLoading(false);
      // console.log(res);
    })
    .catch((err) => {
      if (err.response) {
        setIsCsgoPlayerFound(false);
        setIsCsgoLoading(false);
        console.log(err.response.data);
      }
    });
}
