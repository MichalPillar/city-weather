import React from 'react';
import './App.scss';
import SearchForm from '../searchform/SearchForm';
import Weather from '../weather/Weather';

function App() {
  return (
    <div className="App">
      <h1>Hello Weather</h1>
      <SearchForm />
      <Weather />
    </div>
  );
}

export default App;
