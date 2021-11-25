// Tipos de Funciones

// Funcion declarativa
function imprimirResultado() {
    return 'Hola mundo'
}

var resultado = imprimirResultado()
console.log( resultado )

// Funcion expresiva, o tambien conocidas como anonimas
var suma = function(a, b) {
    return (a + b)
}

console.log( suma(1,2) )

// Funcion flecha
var suma2 = (a,b) => a+b

console.log( suma2(2,2) )

var suma3 = (a,b) => {
    c = a + b
    return c
}

console.log( suma3(2,3) )