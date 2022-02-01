const storage = require('./storage')

function getBills() {
    return new Promise( (resolve, reject) => {
        resolve( storage.get( ) )
    } )
}

module.exports = {
    getBills,
}