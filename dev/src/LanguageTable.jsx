import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { fetchCsv } from "./csvUtils";
import configTable  from "./config-MUI-Datatables.json";
import configColumns from "./config-columns.json";

const title = "Russian Verbs Classification";

const options = configTable;

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
      // const columns = data.splice(0, 1)[0];
      data.splice(0, 1);

      // This is to avoid a bug: an empty row is tailing the end of the MUIDT.
      // This removes this buggy empty line but we lose one row from the CSV => one row must bug from CSV to MUIDT,
      // don't know which one.
      // TODO: need to investigate
      data.pop();
      
      // Use the custom config file instead of the original columns of the CSV.
      // TODO: parse each original column name and set the MUIDT header config from the config file?
      // This way column ordering in the original CSV file can be updated without consequences for the MUIDT
      const columns = configColumns;
      
      updateState({ columns, data });
    });
  }, []);

  // until we fetched and parsed all the data 
  // we show nothing
  if (state === initialState) {
    return null;
  }

  return <MUIDataTable data={state.data} columns={state.columns} options={options} title={title} />;
}
