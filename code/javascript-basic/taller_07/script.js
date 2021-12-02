var investigador1 = {
    nombre: 'Jose Luis',
    apellido: 'Rosales Valverde',
    afiliacion: 'Universidad Politecnica Salesiana',
    correo_electronico: 'jrosalesv2@est.ups.edu.ec',
    edad: 18
}

var investigador2 = {
    nombre: 'Sofia',
    apellido: 'Andrade Bravo',
    afiliacion: 'Universidad Politecnica Salesiana',
    correo_electronico: 'sandradeb2@est.ups.edu.ec',
    edad: 22
}

const imprimirNombreMayuscula = function(objeto) {
    console.log( `${objeto.nombre.toUpperCase()} ${objeto.apellido}` )
}

imprimirNombreMayuscula(investigador1)

const imprimirApelledioMayuscula = (objeto) => {
    let { apellido } = objeto
    console.log( `${objeto.nombre} ${apellido.toUpperCase()}` )
}

imprimirApelledioMayuscula( investigador2 )
imprimirNombreMayuscula( { nombre:'Guillermo', apellido: 'Pizarro' } )

console.log( '=========================================' )
console.log( 'Paso por valor' )
console.log( '=========================================' )

const cumpleanios_x_valor = function( edad ) {
    edad += 1
    console.log( 'La edad es: ' + edad )
}

console.log( investigador1 )
cumpleanios_x_valor( investigador1.edad )
console.log( investigador1 )

const cumpleanios_x_valor2 = (objeto) => {
    return {
        ... objeto,
        edad: objeto.edad + 1
    }
}

console.log( investigador1 )
investigador3 = cumpleanios_x_valor2( investigador1 )
console.log( investigador1 )
console.log( investigador3 )

console.log( '=========================================' )
console.log( 'Paso por referencia' )
console.log( '=========================================' )

const cumpleanios_x_referencia = (objeto) => objeto.edad += 1

console.log( investigador2 )
cumpleanios_x_referencia( investigador2 )
console.log( investigador2 )