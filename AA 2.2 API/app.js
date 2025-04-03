import axios from 'axios';

axios.get('https://jsonplaceholder.typicode2.com2/posts')
.then(respuesta => {
    console.log('Datos recibidos: ', respuesta.data);
}).catch(error => {
    console.log('Error al hacer la solicitud: ', error)
});
