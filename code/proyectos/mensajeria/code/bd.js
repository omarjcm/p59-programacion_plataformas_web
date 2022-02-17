const db = require('mongoose')

db.Promise = global.Promise

async function conexion( url ) {
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbname: 'mensajeria2'
    })
    .then(() => console.log('[db] - Conexion Exitosa.'))
    .catch((error) => console.error('[db] - ' + error))
}

module.exports = conexion