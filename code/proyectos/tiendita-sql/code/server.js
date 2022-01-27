const express = require('express')
const bodyParser = require('body-parser')

const pool = require('./bd')
const config = require('./config')
const routes = require('./network/routes')

var app = express()

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({extended:false}) )

routes( app )

app.use(config.CLIENT_URL, express.static( config.CLIENT_DIR ))
app.listen( config.PORT )
console.log( `La aplicacion esta escuchando en el http://localhost:${config.PORT}` )