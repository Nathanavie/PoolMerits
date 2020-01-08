import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FetchAPI from './components/FetchAPI';
import FetchPremTable from './components/FetchPremTable';
import FetchLeague1Merits from './components/FetchLeagueOneMerits';
import FetchLeague1Table from './components/FetchLeague1Table';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          Google Sheets API Call
        </header>
        <nav className="navbar">
        <Link to={'/'} id="PremMerits" >Premier League Merits</Link>
        <Link to={'/PremTable'} id="PremTable">Premier League Table</Link>
        <Link to={'/League1Merits'} id="League1Merits" >League One Merits</Link>
        <Link to={'/League1Table'} id="League1Table" >League One Table</Link>
        </nav>
        <Switch>
          <Route exact path='/' component={FetchAPI} />
          <Route path='/PremTable' component={FetchPremTable} />
          <Route path='/League1Merits' component={FetchLeague1Merits} />
          <Route path='/League1Table' component={FetchLeague1Table} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
