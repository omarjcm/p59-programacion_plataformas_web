const fetchData = require('./utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

function obtenerPersonaje(id) {
    return fetchData(`${API}${id}`)
}

for (let i=1; i<=10; i++) {
    obtenerPersonaje(i)
        .then((data) => console.log(data.id +'-' + data.name) )
        .catch( (error) => console.error( error ) )
}