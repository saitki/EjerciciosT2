import express from 'express'
import axios from 'axios'
import ejs from 'ejs'

const app = express()
const port = 3000
app.use(express.static('public'))

app.get('/', async (req, res) => {
    try {
        const resultado = await axios.get('https://newton.now.sh/api/v2/factor/x^2-1');
        const operation = resultado.data.operation; 
        const expression = resultado.data.expression;
        const result = resultado.data.result;
        res.render('index.ejs', {
            operation: operation,
            expression: expression,
            result: result,
        });
        console.log(resultado.data);

        
    } catch (error) {
        console.log(error.response.data);
        res.status(500).send('Error al obtener la cita');
    }
})
app.listen(port, ()=> {
    console.log(`http://localhost:${port}`)
})