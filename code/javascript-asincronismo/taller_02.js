// Gestionando el asincronismo.
// Objetivo: que se vea sincrono.
function hola( nombre, fn ) {
    setTimeout( function() {
        console.log( `Hola ${nombre}` )
        dialogar(nombre, 3)
        fn(nombre)
    }, 1000 )
}

function adios(nombre) {
    setTimeout(function(){
        console.log( `Adios ${nombre}.` )
        console.log('Finalizando conversacion...')
    }, 1000)
}

function dialogar(nombre, num_veces) {
    for (let i=0; i<num_veces; i++) {
        hablar(i)
    }
}

function hablar(i) {
    setTimeout( function() {
        console.log('Bla bla bla... ' + (i+1))
    }, 1000 )
}

console.log('Iniciando conversacion...')
hola('Sofia', adios)

