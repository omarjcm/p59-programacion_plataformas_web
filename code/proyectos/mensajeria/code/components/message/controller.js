const storage = require('./storage')

function addMessage( data ) {
    return new Promise( (resolve, reject) => {
        if (!data.user || !data.chat || !data.message)
            return reject('Los datos son incorrectos.')
        
        try {
            let message = {
                ... data,
                date: new Date()
            }
            
            resolve( storage.add( message ) )
        } catch(error) {
            reject( error )
        }
    } )
}

function getMessages(filter) {
    return new Promise((resolve, reject) => {
        resolve( storage.get(filter) )
    })
}

function updateMessage(data) {
    return new Promise((resolve, reject) => {
        resolve( storage.update(data) )
    })
}

function deleteMessage(data) {
    return new Promise((resolve, reject) => {
        resolve( storage.delete(data) )
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,
}