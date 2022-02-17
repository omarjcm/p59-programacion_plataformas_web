const storage = require('./storage')

function addUser( data ) {
    return new Promise( (resolve, reject) => {
        if (data.user == null || data.name == null || data.last_name == null)
            return reject('No dispone de los datos')
        
        try {
            resolve( storage.add( data ) )
        } catch(error) {
            reject( error )
        }
    } )
}

module.exports = {
    addUser,
}