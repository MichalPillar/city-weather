import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchForm from '../searchform/SearchForm';
import Weather from '../weather/Weather';

import './App.scss';

function App() {
  const [city, setCity] = useState({});
  const [searchStr, setSearchStr] = useState('');

  useEffect(() => {
    const corsUrl = 'https://cors-anywhere.herokuapp.com/';
    const sampleUrl = `${corsUrl}https://samples.openweathermap.org/data/2.5/weather?q=London&appid=b6907d289e10d714a6e88b30761fae22`;

    axios
      .get(sampleUrl)
      .then(response => {
        const cityObj = response.data;
        setCity(cityObj);
      })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();

    const corsUrl = 'https://cors-anywhere.herokuapp.com/';
    const sampleUrl = `${corsUrl}https://samples.openweathermap.org/data/2.5/weather?q=London&appid=b6907d289e10d714a6e88b30761fae22`;

    axios
      .get(sampleUrl)
      .then(response => {
        const cityObj = response.data;
        setCity(cityObj);
      })

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
