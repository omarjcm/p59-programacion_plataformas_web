const Model = require('./model')

function addUser( data ) {
    const myData = new Model( data )
    return myData.save()
}

module.exports = {
    add: addUser,
}