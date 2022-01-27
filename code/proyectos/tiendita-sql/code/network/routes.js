const express = require('express')
const country = require('../components/country/network')
//const city = require('../components/city/network')

const routes = function(server) {
    server.use('/country', country)
}

module.exports = routes