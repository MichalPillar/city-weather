import React, { useState } from 'react';
import './App.scss';
import SearchForm from '../searchform/SearchForm';
import Weather from '../weather/Weather';

function App() {
  const [city, setCity] = useState({});
  const [searchStr, setSearchStr] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const cityObj = {
      name: searchStr
    }

    setCity(cityObj);
    setSearchStr('');
  }

  const handleSearch = (event) => {
    setSearchStr(event.target.value);
  }

  return (
    <div className="App">
      <h1>Hello Weather</h1>
      <SearchForm handleSubmit={handleSubmit} handleChange={handleSearch} searchStr={searchStr} />
      <Weather city={city} />
    </div>
  );
}

export default App;
