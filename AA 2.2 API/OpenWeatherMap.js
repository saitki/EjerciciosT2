import axios from 'axios'

const apiKey = '0d9509e96f478d8357473a3ea607493d';
const city = 'London';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

axios.get(url)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error al realizar la petición:', error.message);
  });
