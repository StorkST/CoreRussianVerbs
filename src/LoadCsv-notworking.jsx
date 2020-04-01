import React from 'react';
import Papa from 'papaparse';

class LoadCsv extends React.Component {
    constructor() {
        this.state = {
            data: []
        };

        this.getData = this.getData.bind(this);
    }

    componentWillMount() {
        this.getCsvData();
    }

    fetchCsv() {
        return fetch('export-nostars.csv').then(function (response) {
            let reader = response.body.getReader();
            let decoder = new TextDecoder('utf-8');

            return reader.read().then(function (result) {
                return decoder.decode(result.value);
            });
        });
    }

    getData(result) {
        this.setState({data: result.data});
    }

    //async getCsvData() {
    getCsvData() {
        //let csvData = await this.fetchCsv();
        let csvData = this.fetchCsv();

        Papa.parse(csvData, {
            complete: this.getData
        });
    }

    render() {
        return (
          <section className="LoadCsv">
              <p>Voila des donnees: {this.state.data}</p>
          </section>
        );
    }
}

//export default withRouter(DataController);
ReactDOM.render(<LoadCsv />, document.getElementById("root"));
