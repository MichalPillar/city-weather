import axios from 'axios';

const corsUrl = 'https://cors-anywhere.herokuapp.com/';
const sampleUrl = `${corsUrl}https://samples.openweathermap.org/data/2.5/weather?q=London&appid=b6907d289e10d714a6e88b30761fae22`;

const getSampleData = () => {
  const request = axios.get(sampleUrl);
  return request.then(response => response.data)
}

export default { getSampleData };