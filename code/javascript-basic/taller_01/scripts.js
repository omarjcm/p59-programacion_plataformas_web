/* 
Tipos primitivos:
string, Number, boolean, null, undefined, Symbol
*/

// Variable numerica
var a1 = 42
var a2 = 42.5
console.log( a1 )
console.log( typeof a1 )
console.log( a2 )
console.log( typeof a2 )

// Varible de cadena de caracteres (string)
var b = 'Hola mundo'
console.log( b )
console.log( typeof b )

// Variable booleana (boolean)
var c = true
console.log( c )
console.log( typeof c )

// si un objeto esta seteado a null, igual seguira siendo un objeto
var h = null
console.log( h )
console.log( typeof h )
// si una variable no ha sido inicializada, no existe (undefined).
var g
console.log( g )
console.log( typeof g )

var m = 2
console.log( m )
//console.log( q )
m = undefined
console.log( m )
console.log( typeof m )

// Objetos
var persona = { 
    nomnre: 'Guillermo',
    apellido: 'Pizarro',
    ciudad: 'Guayaquil',
}

console.log( persona )
console.log( typeof persona )

persona.nomnre = 'Guillermo Omar'
console.log( persona )

var nombres = 'Guillermo Omar'
console.log( nombres.length )