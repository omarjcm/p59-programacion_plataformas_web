// Especificacion de ECMAEscript
var miAuto = {
    marca: 'Ford',
    modelo: 'EcoSport',
    anio: 2021,
    detalle_auto: function() {
        console.log( 'Auto: ' + this.marca + ' Año: ' + this.anio)
    }
}

console.log( miAuto.marca )

miAuto.detalle_auto()
console.log( typeof miAuto )

// Especificacion Nativa de Javascript
function otroAuto(marca, modelo, anio) {
    this.marca = marca,
    this.modelo = modelo,
    this.anio = anio,
    this.detalle_auto = function() {
        console.log( 'Auto: ' + this.marca + ' Año: ' + this.anio)
    }
}

var autoNuevo = new otroAuto( 'Chevrolet', 'Tracker Turbo', 2021 )
console.log( autoNuevo.marca )
console.log( typeof autoNuevo )
autoNuevo.detalle_auto() 