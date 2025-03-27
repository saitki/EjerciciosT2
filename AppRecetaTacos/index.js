import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

const recetaJson = `[
{
    "id": "0001",
    "tipo": "taco",
    "nombre": "Taco Lechon",
    "precio": 20.00,
    "ingredientes": {
        "proteina": {
            "nombre": "Puerco",
            "preparacion": "Horneado"
        },
        "salsa": {
            "nombre": "Tomate verde",
            "picor": "medio"
        },
        "acompañamientos": [
        {
            "nombre": "Cebolla",
            "cantidad": "1 cucharada",
            "ingredientes": [ "Cebolla blanca", "Cilantro", "Naranja", "Sal"]
        }, {
            "nombre": "Guacamole",
            "cantidad": "2 cucharadas",
            "ingredientes": [ "Aguacate", "Jugo de limon", "Sal",  "Cebolla", "Cilantro"]
        }
    ]
    }
},
{
    "id": "0001",
    "tipo": "taco",
    "nombre": "Taco de Pollo",
    "precio": 20.00,
    "ingredientes": {
        "proteina": {
            "nombre": "Pollo",
            "preparacion": "Horneado"
        },
        "salsa": {
            "nombre": "Tomate verde",
            "picor": "medio"
        },
        "acompañamientos": [
        {
            "nombre": "Cebolla",
            "cantidad": "1 cucharada",
            "ingredientes": [ "Cebolla blanca", "Cilantro", "Naranja", "Sal"]
        }, {
            "nombre": "Guacamole",
            "cantidad": "2 cucharadas",
            "ingredientes": [ "Aguacate", "Jugo de limon", "Sal",  "Cebolla", "Cilantro"]
        }
    ]
    }
},
{
    "id": "0001",
    "tipo": "taco",
    "nombre": "Taco de Res",
    "precio": 20.00,
    "ingredientes": {
        "proteina": {
            "nombre": "Res",
            "preparacion": "Horneado"
        },
        "salsa": {
            "nombre": "Tomate verde",
            "picor": "medio"
        },
        "acompañamientos": [
        {
            "nombre": "Cebolla",
            "cantidad": "1 cucharada",
            "ingredientes": [ "Cebolla blanca", "Cilantro", "Naranja", "Sal"]
        }, {
            "nombre": "Guacamole",
            "cantidad": "2 cucharadas",
            "ingredientes": [ "Aguacate", "Jugo de limon", "Sal",  "Cebolla", "Cilantro"]
        }
    ]
    }
},
{
    "id": "0001",
    "tipo": "taco",
    "nombre": "Taco de Camaron",
    "precio": 20.00,
    "ingredientes": {
        "proteina": {
            "nombre": "Camaron",
            "preparacion": "Horneado"
        },
        "salsa": {
            "nombre": "Tomate verde",
            "picor": "medio"
        },
        "acompañamientos": [
        {
            "nombre": "Cebolla",
            "cantidad": "1 cucharada",
            "ingredientes": [ "Cebolla blanca", "Cilantro", "Naranja", "Sal"]
        }, {
            "nombre": "Guacamole",
            "cantidad": "2 cucharadas",
            "ingredientes": [ "Aguacate", "Jugo de limon", "Sal",  "Cebolla", "Cilantro"]
        }
    ]
    }
}
]`

const recetaTacos = JSON.parse(recetaJson)

app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.sendFile('/public/index.html')
})
app.get('/receta/:type', (req, res)=>{
    const elegirTaco = recetaTacos.find(r => r.ingredientes.proteina.nombre.toLowerCase() === req.params.type.toLowerCase())
    res.json(elegirTaco || {error: "Receta no encontrada"})
})

app.listen(port, ()=> console.log(`http://localhost:${port}`))