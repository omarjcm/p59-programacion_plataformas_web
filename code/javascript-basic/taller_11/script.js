function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log( `Hola soy ${this.nombre} ${this.apellido}` )
}

Persona.prototype.soy_alto = function() {
    if (this.altura >= 1.7) {
        console.log( `Mi altura es ${this.altura} y soy alto.` )
    } else {
        console.log( `Mi altura es ${this.altura} y no soy alto.` )
    }
}

let objeto1 = new Persona('Guillermo', 'Pizarro', 1.65)
objeto1.saludar()
objeto1.soy_alto()