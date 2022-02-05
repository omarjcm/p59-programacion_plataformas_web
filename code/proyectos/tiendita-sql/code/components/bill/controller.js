const storage = require('./storage')

function getBills() {
    return new Promise( (resolve, reject) => {
        resolve( storage.get( ) )
    } )
}

function addBill( bill ) {
    return new Promise( (resolve, reject) => {
        if (bill.fecha_emision == null || bill.valor_total == null || bill.empleado == null || bill.cliente == null)
            return reject('No dispone de los datos')
        
        try {
            resolve( storage.add( bill ) )
        } catch(error) {
            reject( error )
        }
    } )
}

module.exports = {
    getBills,
    addBill,
}