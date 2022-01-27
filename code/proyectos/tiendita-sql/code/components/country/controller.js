const storage = require('./storage')

function getCountries() {
    return new Promise( (resolve, reject) => {
        resolve( storage.get( ) )
    } )
}

module.exports = {
    getCountries,
}