import React from 'react';
import Search from './components/search';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          className="App-logo"
          src="https://www.tiqets.com/static/assets/webpack/logo/logo-white-medium.0c98d94780.png"
          alt="Tiqets.com"
        />
      </header>
      <main className="App-main">
        <Search />
      </main>
    </div>
  );
}

export default App;
