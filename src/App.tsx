import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Grid } from '@material-ui/core';
import ChallengeDescription from './containers/ChallengeDescription';
import DisplayData from './containers/DisplayData';
import Navbar from './containers/Navbar';

function App() {
  return (
    <Router>
      <Grid container>
        <Grid item xs={12} >
          <Navbar />
        </Grid>
        <Grid item xs={12} style={{ paddingTop: "4rem" }}>
          <Switch>
            <Route path="/data">
              <DisplayData />
            </Route>
            <Route path="/">
              <ChallengeDescription />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </Router >
  );
}

export default App;
