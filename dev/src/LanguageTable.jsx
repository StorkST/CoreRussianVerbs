import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { fetchCsv } from "./csvUtils";

const options = {
  filterType: "dropdown",
  responsive: "scroll",
};

const initialState = {
  columns: [],
  data: [],
};

export default function LanguageTable(props) {
  const [state, updateState] = useState(initialState);

  useEffect(() => {
    fetchCsv({
      url: "./data/RussianVerbsClassification.csv",
      encoding: "utf-8",
      omitHeader: false,
    }).then((data) => {
      // data is array of arrays where first array contains column headers
      // splice removes first array from data and returns headers array wrapped with another array
      // that's why we have [0] at the end
      const columns = data.splice(0, 1)[0];
      updateState({ columns, data });
    });
  }, []);

  // until we fetched and parsed all the data 
  // we show nothing
  if (state === initialState) {
    return null;
  }

  return <MUIDataTable data={state.data} columns={state.columns} options={options} title="Verbs" />;
}
