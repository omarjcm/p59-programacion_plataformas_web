const storage = require('./storage')

function addChat( data ) {
    return new Promise( (resolve, reject) => {
        if (!data.users == null || Array.isArray( data ))
            return reject('No dispone de los datos')
        
        try {
            resolve( storage.add( data ) )
        } catch(error) {
            reject( error )
        }
    } )
}

module.exports = {
    addChat,
}