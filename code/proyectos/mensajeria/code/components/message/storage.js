const Model = require('./model')

async function addMessage( data ) {
    const myData = await new Model( data )
    return myData.save()
}

function getMessages( filter ) {
    return new Promise((resolve, reject) => {
        let myFilter = {}

        if (filter != null) {
            myFilter = { chat: filter.chat }
        }
        resolve( Model.find( filter ) )
    })
}

async function updateMessage(data) {
    const foundMessage = await Model.findOne( { _id: data.id } )
    foundMessage.message = data.message
    const result = await foundMessage.save()
    return result
}

async function deleteMessage(data) {
    return await Model.deleteOne( { _id: data.id } )
}

module.exports = {
    add: addMessage,
    get: getMessages,
    update: updateMessage,
    delete: deleteMessage,
}