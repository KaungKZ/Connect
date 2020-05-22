import axios from "axios";

export default function GetCsgoValues(
  setIsCsgoLoading,
  setIsCsgoPlayerFound,
  setCsgoValues,
  csgo_username
) {
  const proxy_URL = "https://cors-anywhere.herokuapp.com/";
  const tracker_API_key = "2262ffae-2839-4fe9-b8da-1b1630e8b176";

  axios
    .get(
      proxy_URL +
        `https://public-api.tracker.gg/v2/csgo/standard/profile/steam/${csgo_username}`,
      {
        headers: {
          "TRN-Api-Key": tracker_API_key,
          Accept: "application/json",
        },
      }
    )
    .then((res) => {
      setIsCsgoPlayerFound(true);

      const item = res.data.data;
      const stats = res.data.data.segments[0].stats;
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
    })
    .catch((err) => {
      if (err.response) {
        setIsCsgoPlayerFound(false);
        setIsCsgoLoading(false);
      }
    });
}
