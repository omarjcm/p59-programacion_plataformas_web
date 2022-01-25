const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

let app = express()

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({extended:false}) )
app.use( router )

router.get('/mensaje', function(req, res) {
    // esto es lo que recibo del cliente.
    console.log(req.headers)

    // esto es lo que yo envio desde el servidor
    res.header({'custom-header':'Nuestro valor personalizado.'})
    res.send('Lista de mensajes.')
})

router.post('/mensaje', function(req, res){
    res.send('Hola desde POST.')
})

router.delete('/mensaje', function(req, res) {
    // Esto es lo que recibo del cliente.
    console.log( req.query )
    console.log( req.body )
    
    // Esto es lo que envio al cliente.
    res.send('Mensaje eliminado correctamente. ' + req.body.text)
})

let puerto = 3000
app.listen(puerto)
console.log(`La aplicacion esta escuchando en http://localhost:${puerto}`)