import React from 'react';

const Weather = ({ city }) => {
  const iconUrl = 'http://openweathermap.org/img/wn';

  return city.weather === undefined ? (
    <div></div>
  ) : (
      <div className="container">
        <h2>{city.name}</h2>
        <div>{city.main.temp}</div>
        <img alt={city.weather[0].main} src={`${iconUrl}/${city.weather[0].icon}@2x.png`} />
        <h3>{city.weather[0].main}</h3>
        <div>{city.weather[0].description}</div>
      </div>
    )
}

export default Weather;