const express = require('express')
let app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use('/', express.static('public'))

io.on('connection', function(socket){
    console.log('Nuevo cliente conectado.')
    socket.emit('mensaje', 'Bienvenido')
})

let contador = 1
setInterval(function(){
    io.emit('mensaje', 'Hola, saludos a todos. -> ' + contador)
    contador++
}, 3000)

let puerto = 3000
server.listen(puerto, function() {
    console.log(`La aplicacion esta escuchando en http://localhost:${puerto}`)
})