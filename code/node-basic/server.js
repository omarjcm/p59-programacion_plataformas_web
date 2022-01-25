const express = require('express')
const bodyParser = require('body-parser')
const response = require('./network/response')

const router = express.Router()

let app = express()

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({extended:false}) )
app.use( router )

router.get('/mensaje', function(req, res) {
    response.success(req, res, 'Lista de mensajes.')
})

router.post('/mensaje', function(req, res){
    response.success(req, res, 'Hola desde POST.')
})

router.delete('/mensaje', function(req, res) {
    response.success(req, res, 'Mensaje eliminado correctamente.')
})

let puerto = 3000
app.listen(puerto)
console.log(`La aplicacion esta escuchando en http://localhost:${puerto}`)