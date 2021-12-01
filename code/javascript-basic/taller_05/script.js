var articulos = [
    { nombre: 'Bicicleta', modelo: 'BMX', color: 'Azul', costo: 150 },
    { nombre: 'TV Sony', modelo: 'XBR-85Z8H', color: 'negro', costo: 7000  },
    { nombre: 'Laptop i5 16GB 14"', modelo: 'Lenovo', color: 'gris', costo: 860  },
    { nombre: 'Laptop i5 16GB 15"', modelo: 'Lenovo', color: 'gris', costo: 1100  },
    { nombre: 'Laptop i5 16GB 14"', modelo: 'DELL', color: 'gris', costo: 1100  },
    { nombre: 'Laptop i5 16GB 15"', modelo: 'DELL', color: 'gris', costo: 1300  },
    { nombre: 'Auriculares Cancel Noise', modelo: 'Sony', color: 'blanco', costo: 150  },
    { nombre: 'Audifonos Cancel Noise', modelo: 'Sony', color: 'azul', costo: 200  },
    { nombre: 'Mouse inalambrico', modelo: 'Kensington', color: 'negro', costo: 50  },
    { nombre: 'Mouse inalambrico', modelo: 'Havic', color: 'rojo', costo: 15  },
    { nombre: 'Tablet', modelo: 'Samsung', color: 'gris', costo: 400  },
]

console.log( '------------------------------------------' )
console.log( 'Uso del FOREACH' )
console.log( '------------------------------------------' )

articulos.forEach( function( elemento ) {
    console.log( elemento.nombre + ' ' + elemento.modelo )
})

console.log( '------------------------------------------' )
console.log( 'Uso del SOME' )
console.log( 'Me retorna si existe o no algun articulo con costo <= 100.' )
console.log( '------------------------------------------' )

var articulos_baratos = articulos.some( (dato) => dato.costo <= 100 )
console.log( articulos_baratos )

console.log( '------------------------------------------' )
console.log( 'Uso de FILTER' )
console.log( 'Me retorna una lista filtrada' )
console.log( '------------------------------------------' )

var articulos_filtrados = articulos.filter( (articulo) => articulo.costo <= 100 )
console.log( articulos_filtrados )

console.log( '------------------------------------------' )
console.log( 'Uso de MAP' )
console.log( 'retorna una lista de artiuclos modificados.' )
console.log( '------------------------------------------' )

var articulos_nuevos = articulos.map( (dato) => dato.nombre.toUpperCase() )
console.log( articulos_nuevos )

console.log( '------------------------------------------' )
console.log( 'Uso de FIND' )
console.log( '' )
console.log( '------------------------------------------' )

var articulos_encontrados = articulos.find( (articulo) => articulo.nombre == 'Laptop i5 16GB 14"' )
console.log( articulos_encontrados )