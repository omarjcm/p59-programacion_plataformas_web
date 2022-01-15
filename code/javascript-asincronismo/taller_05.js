// Resolviendo asincronismo con async await.

async function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`Hola soy ${nombre}.`)
            resolve( nombre )
        }, 1000)    
    })
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`Adios ${nombre}.`)
            resolve( nombre )
        }, 1000)
    })
}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Bla bla bla...')
            resolve(nombre)
        }, 1000)
    })
}

async function main() {
    console.log('Iniciando conversacion...')
    let nombre = await hola('Michael')
    await hablar()
    await hablar()
    await hablar()
    await hablar()
    await hablar()
    await adios(nombre)
    console.log(`Finalizando conversacion con ${nombre}`)
}

main()