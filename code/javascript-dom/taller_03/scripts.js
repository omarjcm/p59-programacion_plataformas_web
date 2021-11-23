function agregarElemento() {
    var valor = document.getElementById('valor')
    
    var h1 = document.createElement('h1')
    var contenido = document.createTextNode( valor.value )
    h1.appendChild(contenido)

    var container = document.getElementById('container')
    container.appendChild(h1)
}