const express = require('express')

let app = express()
app.use('/', function(req, res) {
    res.send('Hola mundo')
}
)
let puerto = 3000
app.listen(puerto)
console.log(`La aplicacion esta escuchando en http://localhost:${puerto}`)