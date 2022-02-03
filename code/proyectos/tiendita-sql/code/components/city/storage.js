const pool = require('../../bd')

async function getCities( filterCity ) {
    let results = null

    if (filterCity) {
        results = await pool.query('SELECT * FROM ciudad WHERE nombre LIKE $1', ['%' + filterCity + '%'])
    } else {
        results = await pool.query('SELECT * FROM ciudad')
    }

    return results.rows
}

async function addCity( city ) {
    let result = await pool.query('INSERT INTO ciudad(id_ciudad, nombre, ref_pais) VALUES ($1, $2, $3)', [ city.id, city.nombre, city.pais ])
    return result
}

async function updateCity( city ) {
    let result = await pool.query('UPDATE ciudad SET nombre = $1, ref_pais =$2 WHERE id_ciudad = $3', [ city.nombre, city.pais, city.id ])
    return result
}

async function deleteCity( city ) {
    let result = await pool.query('DELETE FROM ciudad WHERE id_ciudad = $1', [ city.id ])
    return result
}

module.exports = {
    get: getCities,
    add: addCity,
    update: updateCity,
    delete: deleteCity,
}