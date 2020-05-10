import React from "react";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import BgIcons from "./components/BgIcons";
// import { CONTEXT } from "../../App";
import "../../css/style.scss";

export default function HomeApp() {
  //const [theme, setTheme] = useState(false);
  // function chgBg () {
  // const theme = useContext(CONTEXT);

  // console.log(theme);

  // }

  return (
    // <CONTEXT.Provider value={theme}>
    <>
      <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer>
      <BgIcons></BgIcons>
    </>
    // </CONTEXT.Provider>
  );
}
