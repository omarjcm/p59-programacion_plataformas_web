var estudiantes = [
    'Alejandro Barreiro',
    'Alexis Moran',
    'Antony Pesantes',
    'Bryan Mendoza',
    'Eliseo Salazar',
    'Dyllan Tumaille',
    'Caviedes Vicente',
    'Evelyn Manzaba',
]

const pasaste = () => {
    var valor_aleatorio = Math.random()
    if (valor_aleatorio > 0.5) {
        return 'Has pasado el curso de Programacion y Plataformas Web'
    } else {
        return 'Te quedaste en el curso de Programacion y Plataformas Web'
    }
}

console.log( pasaste() )

//Especificacion de ECMASCRIPT
const saludarEstudiante = function(estudiante) {
    console.log( `Hola, ${estudiante}, tengo un mensaje para ti: ${pasaste()}` )
}

console.log( '------------------------------------------' )
console.log( 'Uso del FOR iterado mediante variable i' )
console.log( '------------------------------------------' )

for (let i=0; i<estudiantes.length; i++) {
    saludarEstudiante( estudiantes[i] )
}

console.log( '------------------------------------------' )
console.log( 'Uso del FOR iterado mediante OF' )
console.log( '------------------------------------------' )

for (let estudiante of estudiantes) {
    saludarEstudiante( estudiante )
}

console.log( '------------------------------------------' )
console.log( 'Uso del FOREACH' )
console.log( '------------------------------------------' )

estudiantes.forEach(
    (dato) => saludarEstudiante(dato)
)

console.log( '------------------------------------------' )
console.log( 'Uso del WHILE' )
console.log( '------------------------------------------' )

while( estudiantes.length > 0 ) {
    let estudiante = estudiantes.shift()
    saludarEstudiante( estudiante )
}

console.log( estudiantes.length )