import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PremMerits from './components/PremMerits';
import PremTable from './components/PremTable';
import League1Merits from './components/League1Merits';
import League1Table from './components/League1Table';

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
          <Route exact path='/' component={PremMerits} />
          <Route path='/PremTable' component={PremTable} />
          <Route path='/League1Merits' component={League1Merits} />
          <Route path='/League1Table' component={League1Table} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
