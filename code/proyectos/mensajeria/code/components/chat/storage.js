const Model = require('./model')

function addChat( data ) {
    const myData = new Model( data )
    return myData.save()
}

module.exports = {
    add: addChat,
}