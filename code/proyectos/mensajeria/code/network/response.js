exports.success = function(req, res, message, status) {
    res.status( status || 200 ).send( {
        error: '',
        body: message
    } )
}

exports.error = function(req, res, message, status) {
    // Este mensaje es para el desarrollador.
    console.error( '[error] - ' + message )

    res.status( status || 500 ).send( {
        error: message,
        body: ''
    } )
}