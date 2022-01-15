// Resolviendo asincronismo con callbacks.

function hola(nombre, responder_hola) {
    setTimeout(function() {
        console.log(`Hola soy ${nombre}.`)
        responder_hola( nombre )
    }, 1000)
}

function adios(nombre) {
    setTimeout(function() {
        console.log(`Adios ${nombre}.`)
        console.log('Finalizando conversacion...')
    }, 1000)    
}

function hablar(fn) {
    setTimeout(function(){
        console.log('Bla bla bla...')
        fn()
    }, 1000)
}

function dialogar(nombre, num_veces) {
    if (num_veces > 0) {
        hablar(function() {
            dialogar(nombre, --num_veces)
        })
    } else {
        adios( nombre )
    }
}

function responder_hola(nombre) {
    dialogar(nombre, 5)
}

console.log('Iniciando conversacion...')
hola('Dylan', responder_hola)
