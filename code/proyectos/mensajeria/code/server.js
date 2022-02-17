const express = require('express')
const bodyParser = require('body-parser')

const config = require('./config')
const routes = require('./network/routes')

var app = express()

const db = require('./bd')
db( config.DB_URL )

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({extended:false}) )

routes( app )

app.use(config.CLIENT_URL, express.static( config.CLIENT_DIR ))
app.listen( config.PORT )
console.log( `La aplicacion esta escuchando en el http://localhost:${config.PORT}` )