import axios from "axios";
export default function GetOwValues(
  setIsOwPlayerFound,
  setIsOwLoading,
  setOwValues,
  ow_username,
  ow_platform,
  ow_region
) {
  const proxy_URL = "https://cors.bridged.cc/";

  axios
    .get(
      `${proxy_URL}https://best-overwatch-api.herokuapp.com/player/${ow_platform}/${ow_region}/${ow_username}`
    )
    .then((res) => {
      if (!res.data || Object.keys(res.data).length === 0) {
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
    })
    .catch((err) => {
      if (err.response) {
        setIsOwPlayerFound(false);
        setIsOwLoading(false);
      }
    });
}
