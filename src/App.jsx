import React, { useState, createContext } from "react";
import HomeApp from "./components/homePage/HomeApp";
import MainApp from "./components/mainPage/MainApp";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const CONTEXT = createContext();

export default function App() {
  const [theme, setTheme] = useState(false);

  const contextValues = {
    theme,
    setTheme,
  };
  // console.log(theme);
  return (
    <Router>
      <Switch>
        <CONTEXT.Provider value={contextValues}>
          <Route path="/" exact component={HomeApp}></Route>
          {/* </CONTEXT.Provider> */}
          {/* <CONTEXT.Provider value={contextValues}> */}
          <Route path="/app" component={MainApp}></Route>
        </CONTEXT.Provider>
      </Switch>
    </Router>
  );
}
