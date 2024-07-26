import PeopleTable from "./People";
import React from "react";
import { createRoot } from "react-dom/client";

window.loadApp = (json) => {
  console.log("rendering data ...")
  const obj = JSON.parse(json);
  const container = document.getElementById("root");
  const root = createRoot(container);

  root.render(<PeopleTable data={obj} />);
};

console.log("v.1.0.0")