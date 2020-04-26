import React, { Component, useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { fetchCsv } from "./csvUtils";
import { configDailyVerbs } from "./config-dailyVerbs.js";

import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
const dailyIndexB1 = Math.round((dailyRand * (B2 - B1 - 1)) + B1);
const dailyIndexB2 = Math.round((dailyRand * (C1 - B2 - 1)) + B2);
const dailyIndexC1 = Math.round((dailyRand * (C2 - C1 - 1)) + C1);
const dailyIndexC2 = Math.round((dailyRand * (finale - C2)) + C2);

const styles = configDailyVerbs;

class DailyVerbs extends Component {
	constructor(props) {
		super(props);

		this.state = {
			verbs: {
				"A1": "",
				"A2": "",
				"B1": "",
				"B2": "",
				"C1": "",
				"C2": ""
			}
		};
	}

	componentDidMount() {
    fetchCsv({
      url: "./data/RussianVerbsClassification.csv",
      encoding: "utf-8",
      omitHeader: false,
    }).then((data) => {
        data.splice(0, 1);
        data.pop();
        let newVerbs = {};

        data.map((row) => {
          const i = row[0];
          const verbName = row[5] + ' #' + i ;

          switch(i) {
            case dailyIndexA1:
              newVerbs["A1"] = verbName;
            break;
            case dailyIndexA2:
              newVerbs["A2"] = verbName;
            break;
            case dailyIndexB1:
              newVerbs["B1"] = verbName;
            break;
            case dailyIndexB2:
              newVerbs["B2"] = verbName;
            break;
            case dailyIndexC1:
              newVerbs["C1"] = verbName;
            break;
            case dailyIndexC2:
              newVerbs["C2"] = verbName;
            break;
          }
        });
        this.setState({ verbs: newVerbs });
    });
	}

	render() {
		return (
      <div style={styles.root}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography style={styles.title} variant="h6">
              Глаголы сегодня
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <List component="nav" style={styles.list}>
              <ListItem>
                <Avatar style={styles.greenAvatar}>A1</Avatar>
                <ListItemText inset primary={this.state.verbs["A1"]} />
              </ListItem>
              <ListItem>
                <Avatar style={styles.greenAvatar}>A2</Avatar>
                <ListItemText inset primary={this.state.verbs["A2"]} />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={4}>
            <List component="nav" style={styles.list}>
              <ListItem>
                <Avatar style={styles.orangeAvatar}>B1</Avatar>
                <ListItemText inset primary={this.state.verbs["B1"]} />
              </ListItem>
              <ListItem>
                <Avatar style={styles.orangeAvatar}>B2</Avatar>
                <ListItemText inset primary={this.state.verbs["B2"]} />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={4}>
            <List component="nav" style={styles.list}>
              <ListItem>
                <Avatar style={styles.redAvatar}>C1</Avatar>
                <ListItemText inset primary={this.state.verbs["C1"]} />
              </ListItem>
              <ListItem>
                <Avatar style={styles.redAvatar}>C2</Avatar>
                <ListItemText inset primary={this.state.verbs["C2"]} />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </div>
    );
	}
}

export default DailyVerbs
