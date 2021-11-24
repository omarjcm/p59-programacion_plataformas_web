var distancia = [0, 0]
var divCajita = document.getElementById('cajita')
var esPresionada = false

divCajita.addEventListener('mousedown', function(e) {
    esPresionada = true

    console.log('[mousedown]')
    console.log( 'offsetLeft: ' + divCajita.offsetLeft )
    console.log( 'offsetTop: ' + divCajita.offsetTop )
    console.log( 'X: ' + e.clientX )
    console.log( 'Y: ' + e.clientY )

    distancia = [
        divCajita.offsetLeft - e.clientX,
        divCajita.offsetTop - e.clientY,
    ]
}, true)

divCajita.addEventListener('mouseup', function(){
    esPresionada = false
    console.log('[mouseup]')
}, true)

divCajita.addEventListener('mousemove', function(e) {
    console.log('[mousemove]')

    if (esPresionada) {
        divCajita.style.left = (e.clientX + distancia[0]) + 'px' 
        divCajita.style.top = (e.clientY + distancia[1]) + 'px'
    }
}, true)
