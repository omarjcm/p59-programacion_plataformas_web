const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const route = express.Router()

route.get('/', function(req, res) {
    const filterCity = req.query.texto || null
    controller.getCities( filterCity )
        .then( (data) => {
            response.success(req, res, data, 200)
        } )
        .catch( (data) => {
            response.error(req, res, data, 500)
        } )
})

route.post('/', function(req, res){
    controller.addCity( req.body )
    .then( (data) => {
        response.success(req, res, data, 200)
    } )
    .catch( (data) => {
        response.error(req, res, data, 500)
    } )
})

route.patch('/', function(req, res) {
    controller.updateCity( req.body )
    .then( (data) => {
        response.success(req, res, data, 200)
    } )
    .catch( (data) => {
        response.error(req, res, data, 500)
    } )
})

route.delete('/', function(req, res) {
    controller.deleteCity( req.body )
    .then( (data) => {
        response.success(req, res, data, 200)
    } )
    .catch( (data) => {
        response.error(req, res, data, 500)
    } )
})

module.exports = route