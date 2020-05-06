import React, { useContext } from "react";
import "../../css/mainPage.scss";
import { CONTEXT } from "../../App";

export default function MainApp(props) {
  console.log(props.location.state);

  const { theme, setTheme } = useContext(CONTEXT);

  console.log(theme);

  // useEffect(() => {}, []);
  return (
    <div>
      <h1>hi from main app</h1>
    </div>
  );
}
