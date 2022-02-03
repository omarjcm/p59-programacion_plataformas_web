const storage = require('./storage')

function getCities( filterCity ) {
    return new Promise( (resolve, reject) => {
        resolve( storage.get( filterCity ) )
    } )
}

function addCity( city ) {
    return new Promise((resolve, reject) => {
        if (city.id == null || city.nombre == null || city.pais == null) {
            return reject('No existen datos')
        }
        storage.add( city )
        resolve( city )
    })
}

function updateCity(city) {
    return new Promise((resolve, reject) => {
        if (city.id == null || city.nombre == null || city.pais == null) {
            return reject('No existen datos')
        }
        storage.update( city )
        resolve( city )
    })
}

function deleteCity(city) {
    return new Promise((resolve, reject) => {
        if (city.id == null) {
            return reject('No existen datos')
        }
        storage.delete( city )
        resolve( city )
    })
}

module.exports = {
    getCities,
    addCity,
    updateCity,
    deleteCity,
}