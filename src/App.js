import React from 'react';
import logo from './logo.svg';
import './App.css';
import FetchAPI from './components/FetchAPI';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Google Sheets API Call
      </header>
      <FetchAPI />
    </div>
  );
}

export default App;
