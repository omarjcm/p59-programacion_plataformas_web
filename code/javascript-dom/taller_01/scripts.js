function cargarElemento() {
    var h1 = document.createElement('h1')
    var contenido = document.createTextNode('DOM - Document Object Model')
    h1.appendChild(contenido)

    var container = document.getElementById('container')
    container.appendChild(h1)
}