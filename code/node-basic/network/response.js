exports.success = function(req, res, message) {
    res.send( message )
}

exports.error = function(req, res, message) {
    res.send( message )
}