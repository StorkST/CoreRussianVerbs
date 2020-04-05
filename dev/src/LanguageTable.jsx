import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { fetchCsv } from "./csvUtils";

const title = "Russian Verbs Classification";

const options = {
  //responsive: "scroll",
  rowsPerPageOptions: [20, 50, 100, 250],
  filterType: "multiselect"
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
      let columns = data.splice(0, 1)[0];
      const customizeCol = [];
      columns.map((name) => {
        let newCol = {
          name: name,
          options: {
            filter: false
          } 
        };
        switch(name){
          case "a":
                newCol = {
                  ...newCol,
                  options: {
                    filter: true,
                    hint: "Rank. This is from KELLY."
                  }
                }
          break;
        }
        customizeCol.push(newCol);
      });
//          default:
//            customizeCol = customizeCol.concat(
//              {
//                //name: "toto"
//              }
//            );
      columns = customizeCol;
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
