const pool = require('../../bd')

async function getCountries() {
    let results = null

    results = await pool.query('SELECT * FROM pais')

    return results.rows
}

module.exports = {
    get: getCountries,
}