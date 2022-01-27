const express = require('express')
const bodyParser = require('body-parser')

let app = express()

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({extended:false}) )

app.use('/', express.static('public'))

let puerto = 3000
app.listen( puerto )
console.log( `La aplicacion esta escuchando en el http://localhost:${puerto}` )