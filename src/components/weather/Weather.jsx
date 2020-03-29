import React from 'react';

const Weather = ({ city }) => (
  <div className="container">
    {city.name}
  </div>
)

export default Weather;