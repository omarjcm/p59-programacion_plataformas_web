const express = require('express')
const country = require('../components/country/network')
const city = require('../components/city/network')
const bill = require('../components/bill/network')

const routes = function(server) {
    server.use('/country', country)
    server.use('/city', city)
    server.use('/bill', bill)
}

module.exports = routes