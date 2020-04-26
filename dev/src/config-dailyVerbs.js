import React from "react";
import { green, deepOrange, red } from '@material-ui/core/colors';

const configDailyVerbs = {
  root: {
    margin: 'auto',
    marginTop: '20px',
    marginBottom: '20px',
    width: '100%',
    maxWidth: 1100,
    fontFamily: "Roboto"
    //flexGrow: 1
  },
  title: {
    textAlign: 'center'
  },
  list: {
    width: '100%',
    maxWidth: 360
  },
  avatar: {
    margin: 10,
  },
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: green[500],
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  redAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: red[900],
  }
};

export
{
    configDailyVerbs
};
