import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ChallengeDescription from './containers/ChallengeDescription';
import FolderBrowser from './components/FolderBrowser';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Challenge Description</Link>
            </li>
            <li>
              <Link to="/data">Data</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/data">
            <FolderBrowser />
          </Route>
          <Route path="/">
            <ChallengeDescription />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
