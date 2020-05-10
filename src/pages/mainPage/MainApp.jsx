import React, { useContext, useEffect, useState } from "react";
// import "../../css/mainPage.scss";
import Header from "./components/Header";
import Boxes from "./components/Boxes";
import { CONTEXT } from "../../App";

import axios from "axios";

export default function MainApp(props) {
  // const { theme, setTheme } = useContext(CONTEXT);
  const inputsValues = props.location.state;

  // const { dotaValues, fortniteValues, owValues, csgoValues } = inputsValues;

  // console.log(owValues);

  // if (fortniteValues.username) {
  //   console.log("exist");
  // } else {
  //   console.log("nah");
  // }

  // console.log(platformValues);
  // const [youtubeValues, setYoutubeValues] = useState({
  //   channelName: "",
  //   subscriberCount: "",
  //   viewCount: "",
  //   videoCount: "",
  // });
  // const {
  //   channelName: YT_channelName,
  //   subscriberCount: YT_subscriberCount,
  //   viewCount: YT_viewCount,
  //   videoCount: YT_videoCount,
  // } = youtubeValues;

  const fortnite_API_key = "84948d29-37c333a3-b40e4ba5-3681decb";
  const tracker_API_key = "2262ffae-2839-4fe9-b8da-1b1630e8b176";
  const proxy_URL = "https://cors-anywhere.herokuapp.com/";

  // const facebookInput = usernameInputs.facebook;
  // const youtubeInput = usernameInputs.youtube;
  // const twitterInput = usernameInputs.twitter;
  // const InstaInput = usernameInputs.insta;

  // DOTA 2

  // CS GO (SUCCESS)

  // useEffect(() => {
  //   axios
  //     .get(
  //       proxy_URL +
  //         "https://public-api.tracker.gg/v2/csgo/standard/profile/steam/76561198261268372",
  //       {
  //         headers: {
  //           "TRN-Api-Key": tracker_API_key,
  //           Accept: "application/json",
  //           "Accept-Encoding": "gzip",
  //         },
  //       }
  //     )
  //     .then((res) => console.log(res));
  // }, []);

  // FORTNITE (SUCCESS)

  // useEffect(() => {
  //   axios
  //     .get(
  //       proxy_URL + "https://api.fortnitetracker.com/v1/profile/pc/KaungxKZ",
  //       {
  //         headers: {
  //           "TRN-Api-Key": tracker_API_key,
  //           Accept: "application/json",
  //           "Accept-Encoding": "gzip",
  //         },
  //       }
  //     )
  //     .then((res) => console.log(res));
  // }, []);

  // Overwatch (SUCCESS) (1st API)

  // useEffect(() => {
  //   axios
  //     .get("https://ow-api.com/v1/stats/pc/us/Kaido-11162/profile")
  //     .then((res) => console.log(res));
  // }, []);

  // Overwatch (2nd API)

  return (
    <>
      <Header></Header>
      <Boxes></Boxes>
    </>
  );
}
