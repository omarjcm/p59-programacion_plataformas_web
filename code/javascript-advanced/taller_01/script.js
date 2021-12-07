function Heredar(prototipoHijo, prototipoPadre) {
    // Se define una funcion dummy
    let fn = function() {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

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

function Deportista(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

Heredar(Deportista, Persona)

Deportista.prototype.saludar = function() {
    console.log(  `Hola soy ${this.nombre} ${this.apellido} y soy deportista.` )
}

let objeto1 = new Persona('Guillermo', 'Pizarro', 1.65)
objeto1.saludar()
objeto1.soy_alto()

let objeto2 = new Deportista('Wellington', 'Rodriguez')
objeto2.saludar()
objeto2.altura = 1.8
objeto2.soy_alto()