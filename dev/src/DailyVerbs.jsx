import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { fetchCsv } from "./csvUtils";

const A2 = 122;
const B1 = 332;
const B2 = 659;
const C1 = 1336;
const C2 = 1644;
const finale = 1755;

const d = new Date();
var seedrandom = require('seedrandom');
const dailyRng = seedrandom(d.getFullYear() + d.getMonth() + d.getDate());
const dailyRand = dailyRng();
const dailyIndexA1 = Math.round(dailyRand * (A2 - 1));
const dailyIndexA2 = Math.round((dailyRand * (B1 - A2 - 1)) + A2);

const initialState = {
  verbs: {},
  isLoading: false
};

export default function DailyVerbs(props) {
  const [state, updateState] = useState(initialState);

  useEffect(() => {
    let mounted = true;
    updateState({ isLoading: true });
    fetchCsv({
      url: "./data/RussianVerbsClassification.csv",
      encoding: "utf-8",
      omitHeader: false,
    }).then((data) => {
        data.splice(0, 1);
        data.pop();
        let verbs = {};

        data.map((row) => {
          const newVerbs = [];
          const i = row[0];
          const verbName = row[5];
          verbs["C1"] = "toto";

          if (i == dailyIndexA1){
            verbs["A1"] = i + "- " + verbName;
          } else if (i == dailyIndexA2) {
            verbs["A2"] = i + "- " + verbName;
            verbs["C2"] = "toto";
          }
        });
        if (mounted) {
          updateState({ verbs, isLoading: false });
        }
    });
    return () => mounted = false;
  }, []);
  
  if (state === initialState) {
     return null;
  }
//      <ul>
//        <li>A1: {state.verbs["A1"]} </li>
//        <li>A2: {state.verbs["A2"]} </li>
//        <li>B1: {state.verbs["B1"]} </li>
//        <li>B2: {state.verbs["B2"]} </li>
//        <li>C1: {state.verbs["C1"]} </li>
//        <li>C2: {state.verbs["C2"]} </li>
//      </ul>

  return (
    <div>
      <ul>
        {state.verbs.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
