const express = require('express')
const country = require('../components/country/network')
const bill = require('../components/bill/network')
//const city = require('../components/city/network')

const routes = function(server) {
    server.use('/country', country)
    server.use('/bill', bill)
}

module.exports = routes