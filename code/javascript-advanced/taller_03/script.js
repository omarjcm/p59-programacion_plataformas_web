// Funciones tipo callback

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn) {
        console.log( `Hola soy ${this.nombre} ${this.apellido}` )
        if (fn) {
            fn(this.nombre, this.apellido)
        }
    }

    soy_alto(fn) {
        if (this.altura >= 1.7) {
            console.log( `Mi altura es ${this.altura} y soy alto.` )
        } else {
            console.log( `Mi altura es ${this.altura} y no soy alto.` )
        }

        if (fn) {
            fn( this.nombre )
        }
    }
}

class Deportista extends Persona {
    constructor(nombre, apellido) {
        super(nombre, apellido)
    }

    saludar(fn) {
        console.log( `Hola soy ${this.nombre} ${this.apellido} y soy deportista.` )

        if(fn) {
            fn( this.nombre, this.apellido, null )
        }
    }
}

function responder_saludo(nombre, apellido) {
    console.log( `Hola ${nombre} ${apellido}, como estas?` )
}

function respuesta_inadecuada(nombre) {
    console.log( `Hummmm.... ${nombre}. No te pregunte eso, disculpa.` )
}

let objeto1 = new Persona('Guillermo', 'Pizarro', 1.65)
objeto1.saludar( responder_saludo )
objeto1.soy_alto( respuesta_inadecuada )

let objeto2 = new Deportista('Wellington', 'Rodriguez')
objeto2.saludar()
objeto2.altura = 1.8
objeto2.soy_alto( respuesta_inadecuada )