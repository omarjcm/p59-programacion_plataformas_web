const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const route = express.Router()

route.get('/', function(req, res) {
    const filterMessage = req.body || null
    controller.getMessages( filterMessage )
        .then( (data) => {
            response.success(req, res, data, 200)
        } )
        .catch( (data) => {
            response.error(req, res, data, 500)
        } )
})

route.post('/', function(req, res) {
    controller.addMessage( req.body )
        .then( (data) => {
            response.success(req, res, data, 200)
        } )
        .catch( (data) => {
            response.error(req, res, data, 500)
        } )
})

route.patch('/', function(req, res) {
    controller.updateMessage( req.body )
        .then( (data) => {
            response.success(req, res, data, 200)
        } )
        .catch( (data) => {
            response.error(req, res, data, 500)
        } )
})

route.delete('/', function(req, res) {
    controller.deleteMessage( req.body )
        .then( (data) => {
            response.success(req, res, data, 200)
        } )
        .catch( (data) => {
            response.error(req, res, data, 500)
        } )
})

module.exports = route