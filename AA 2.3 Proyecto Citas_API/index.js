import express from 'express'
import axios from 'axios'
import ejs from 'ejs'

const app = express()
const port = 3000
app.use(express.static('public'))

app.get('/', async (req, res) => {
    try {
        const result = await axios.get('https://v2.jokeapi.dev/joke/Programming?lang=es&type=single');
        const joke = result.data.joke; 
        const category = result.data.category;
        res.render('index.ejs', {
            joke: joke,
            category: category,
        });
        console.log(result.data);

        
    } catch (error) {
        console.log(error.response.data);
        res.status(500).send('Error al obtener la cita');
    }
})
app.listen(port, ()=> {
    console.log(`http://localhost:${port}`)
})