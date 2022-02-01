const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const route = express.Router()

route.get('/', function(req, res) {
    controller.getBills()
        .then( (data) => {
            response.success(req, res, data, 200)
        } )
        .catch( (data) => {
            response.error(req, res, data, 500)
        } )
})

module.exports = route