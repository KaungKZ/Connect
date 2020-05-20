import React, { useState, createContext, useEffect } from "react";
import HomeApp from "./pages/homePage/HomeApp";
import MainApp from "./pages/mainPage/MainApp";
import Toggle from "./pages/homePage/components/Toggle";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const CONTEXT = createContext();

export default function App() {
  const [theme, setTheme] = useState({
    checked: localStorage.getItem("theme") === "light" ? true : false,
    theme: localStorage.getItem("theme"),
  });

  // console.log(theme);

  useEffect(() => {
    // localStorage.setItem("theme", "dark");
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, []);

  const contextValues = {
    theme,
    setTheme,
  };
  // console.log(theme);
  return (
    <Router>
      <Switch>
        <CONTEXT.Provider value={contextValues}>
          <Toggle></Toggle>
          <Route path="/" exact component={HomeApp}></Route>
          <Route path="/dashboard" component={MainApp}></Route>
        </CONTEXT.Provider>
      </Switch>
    </Router>
  );
}
