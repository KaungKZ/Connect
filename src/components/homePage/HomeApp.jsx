import React from "react";

import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import BgIcons from "./BgIcons";
// import { CONTEXT } from "../../App";
import "../../css/homePage.scss";

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
