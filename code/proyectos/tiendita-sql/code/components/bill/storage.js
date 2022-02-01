const pool = require('../../bd')

async function getBills() {
    let results = null

    results = await pool.query('SELECT * FROM factura;')
    
    return results.rows
}

module.exports = {
    get: getBills,
}