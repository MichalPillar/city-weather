import React, { useState, useEffect } from 'react';
import weatherService from '../../services/weatherService';

import SearchForm from '../searchform/SearchForm';
import Weather from '../weather/Weather';

import './App.scss';

function App() {
  const [city, setCity] = useState({});
  const [searchStr, setSearchStr] = useState('');

  useEffect(() => {
    weatherService
      .getSampleData()
      .then(cityObj => setCity(cityObj))
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();

    weatherService
      .getSampleData()
      .then(cityObj => setCity(cityObj))
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
