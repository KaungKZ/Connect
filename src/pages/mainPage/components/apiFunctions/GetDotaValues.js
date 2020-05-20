// import React from "react";
import axios from "axios";

export default function GetDotaValues(
  dota_username,
  setDotaValues,
  setIsDotaLoading,
  setIsDotaPlayerFound
) {
  // const proxy_URL = "https://cors-anywhere.herokuapp.com/";
  axios
    .all([
      axios.get(`https://api.opendota.com/api/players/${dota_username}`),
      axios.get(`https://api.opendota.com/api/players/${dota_username}/wl`),
      axios.get(
        `https://api.opendota.com/api/players/${dota_username}/matches`,
        {
          params: {
            limit: 1,
          },
        }
      ),
      axios.get("https://api.opendota.com/api/heroes"),
    ])
    .then((resArr) => {
      // console.log(resArr);
      if (!resArr[0].data.profile) {
        console.log("dota player not found");
        setIsDotaPlayerFound(false);
        // setIsPlayerFound((prev) => {
        //   return [
        //     ...prev,
        //     {
        //       value: "dota",
        //       playerFound: false,
        //     },
        //   ];
        // });
        setIsDotaLoading(false);
        // PlayerNotFound();
        return;
      }
      //console.log("received");
      // console.log(resArr);
      setIsDotaPlayerFound(true);

      const item1 = resArr[0].data;
      const item2 = resArr[1].data;
      const item3 = resArr[2].data[0];
      const item4 = resArr[3].data;

      // console.log(item3);

      setDotaValues((prevState) => {
        return {
          ...prevState,
          profile: {
            username: item1.profile.personaname,
            avatar_url: item1.profile.avatarmedium,
            profile_link: item1.profile.profileurl,
          },
          rank: item1.mmr_estimate.estimate,
          matches: {
            win: item2.win,
            lose: item2.lose,
          },
          recent_match: {
            status: item3.radiant_win ? true : false,
            duration: Math.round(item3.duration / 60),
            hero: item4.find((hero) => hero.id === item3.hero_id)
              .localized_name,
            matchID: item3.match_id,
          },
        };
      });
      setIsDotaLoading(false);
      // setIsPlayerFound((prev) => {
      //   return [
      //     ...prev,
      //     {
      //       value: "dota",
      //       playerFound: true,
      //     },
      //   ];
      // });
    })
    .catch((err) => {
      if (err.response) {
        setIsDotaPlayerFound(false);
        setIsDotaLoading(false);
        console.log(err.response.data);
      }
    });
}

// useEffect(() => {
//     getValuesFromAPI1();
//     getValuesFromAPI2();
//     getValuesFromAPI3();
// }, [])

// getValuesFromAPI1 () {
//     axios.get(url)
//     .. code
// }
