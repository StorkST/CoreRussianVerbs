import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { CircularProgress, Typography } from '@material-ui/core';
import { fetchCsv } from "./csvUtils";
import configTable  from "./config-MUI-Datatables.json";
import configColumns from "./config-columns.json";

const title = "Основные глаголы русского языка";

const options = configTable;

const initialState = {
  columns: [],
  data: [],
  isLoading: false
};

export default function LanguageTable(props) {
  const [state, updateState] = useState(initialState);

  useEffect(() => {
    updateState({ isLoading: true })
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
      // This removes this buggy empty line
      // TODO: need to investigate
      data.pop();
      
      // Use the custom config file instead of the original columns of the CSV.
      // TODO: parse each original column name and set the MUIDT header config from the config file?
      // This way column ordering in the original CSV file can be updated without consequences for the MUIDT
      const columns = configColumns;
      
      updateState({ columns, data, isLoading: false });
    });
  }, []);

  // until we fetched and parsed all the data 
  // we show nothing
  // 2020-04-06: disabled, added cirular progress at loading
  // if (state === initialState) {
  //   return null;
  //}

	return (
		<div>
			<MUIDataTable title={<Typography variant="title">
        {title}
				{state.isLoading && <CircularProgress size={24} style={{marginLeft: 15, position: 'relative', top: 4}} />}
				</Typography>
				} data={state.data} columns={state.columns} options={options} />
		</div>
	);
}
