import React, { useContext } from "react";
import DashboardList from "./DashboardList";
import { CONTEXT_API } from "../MainApp";

export default function Boxes() {
  const context_values = useContext(CONTEXT_API);

  const { activeCards } = context_values;

  return (
    <div className="dashboards">
      {activeCards.map((val, i) => {
        return <DashboardList key={i} val={val} i={i}></DashboardList>;
      })}
    </div>
  );
}
