import express from 'express'
import bodyParser from 'body-parser'
import fs from 'fs'

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('/public/index.html')
})

app.get('/tema/:type', (req, res) => {
    const temaJson = ""
    fs.readFile('./temas.json', 'utf8', (err, data) => {
        if(err) {
            console.error('Error de lectura....')
        }
        const tema = JSON.parse(data)
        const elegirTema = tema.find(r => r.nombre.toLowerCase() === req.params.type.toLowerCase())
        res.json(elegirTema || {error: "Tema no encontrada"})
    })


})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})