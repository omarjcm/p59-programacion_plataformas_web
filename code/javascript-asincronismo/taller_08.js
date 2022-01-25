const fetchData = require('./utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

function obtenerPersonaje(id) {
    return fetchData(`${API}${id}`)
}

// Promesas encadenadas.
obtenerPersonaje(1)
    .then( (datos) => {
        console.log( datos.id + '-' + datos.name )
        return obtenerPersonaje(2)
    } )
    .then( (datos) => {
        console.log( datos.id + '-' + datos.name )
        return obtenerPersonaje(3)
    } )
    .then( (datos) => {
        console.log( datos.id + '-' + datos.name )
        return obtenerPersonaje(4)
    } )
    .then( (datos) => {
        console.log( datos.id + '-' + datos.name )
        return obtenerPersonaje(5)
    } )
    .catch( (error) => console.error( error ) )
