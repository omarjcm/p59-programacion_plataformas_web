/*  Igualdad de Objetos
    ===================

    Caracteristicas de los objetos (POO)
    Identidad -> a la direccion en memoria (unico en memoria RAM),
    Estado -> los valores asociados a un objeto en un determinado momento,
    Comportamiento -> los metodos asociados a un objeto.
*/ 
let persona1 = {
    nombre: 'Alexis',
    apellido: 'Moran Burgos',
    imprimir: function() {
        console.log( `- ${this.nombre} ${this.apellido}.` )
    }
}

let persona2 = {
    nombre: 'Eliseo',
    apellido: 'Salazar',
    imprimir: function() {
        console.log( `- ${this.nombre} ${this.apellido}.` )
    }
}

let persona3 = {
    nombre: 'Eliseo',
    apellido: 'Salazar',
    imprimir: function() {
        console.log( `- ${this.nombre} ${this.apellido}.` )
    }
}

console.log( persona2 == persona3 )

console.log( persona3 )
// aqui se esta asignando la identidad, estado y comportamiento de un objeto a otro.
// copia por referencia
let persona4 = persona3
console.log( persona3 == persona4 )
persona4.nombre = 'Sofia'
persona4.apellido = 'Andrade'
console.log( persona3 )

// aqui se esta asignando solo el estado y el comportamiento.
// copia por valor
let persona5 = {
    ... persona2
}

console.log( persona5 == persona2 )

persona2.imprimir()
persona5.imprimir()

console.log( persona1.nombre == persona2.nombre && persona1.apellido == persona2.apellido )
console.log( persona5.nombre == persona2.nombre && persona5.apellido == persona2.apellido )