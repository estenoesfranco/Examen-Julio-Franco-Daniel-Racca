import React from 'react';
import './App.css';
import DataFetcher from './components/DataFetcher';


function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Existir</h1>
        <DataFetcher />
      </header>
    </div>
  );
}

export default App;
