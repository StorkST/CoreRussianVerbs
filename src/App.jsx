import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import Papa from "papaparse";

class App extends React.Component {
  render() {
    const columns = ["Name", "Title", "Location", "Age", "Salary"];
		//For future use
    const headers = columns.map((value, key) => {
			if (key <= 3) {
				return {
					name: value,
					options: {
						display: true
					}
				};
			} else
				return {
					name: value,
					options: {
						display: false
					}
				};
		});

    const data = [
      ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000"],
      ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
      ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
      ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
     ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"]
    ];
    
    const options = {
      filterType: "dropdown",
      responsive: "scroll"
    };

    return (
      <MUIDataTable
        title={"ACME Employee list"}
        data={data}
        columns={columns}
        options={options}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
