import React from "react";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import BgIcons from "./components/BgIcons";
import "../../css/style.scss";

export default function HomeApp() {
  return (
    <>
      <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer>
      <BgIcons></BgIcons>
    </>
  );
}
