// Resolviendo asincronismo con promesas.
function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`Hola soy ${nombre}.`)
            resolve( nombre )
        }, 1000)    
    })
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`Adios ${nombre}.`)
            resolve( nombre )
        }, 1000)
    })
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Bla bla bla...')
            resolve(nombre)
        }, 1000)
    })
}

console.log('Iniciando conversacion...')
hola('Dylan')
    .then( hablar )
    .then( hablar )
    .then( hablar )
    .then( hablar )
    .then( hablar )
    .then( hablar )
    .then( adios )
    .then( (nombre) => {
        console.log(`Finalizando conversacion con ${nombre}`)
    } )