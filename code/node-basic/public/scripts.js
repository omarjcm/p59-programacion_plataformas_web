var xhttp = null

function cargar_datos(tipoPeticion) {
    xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = obtener_respuesta
    xhttp.open(tipoPeticion, '/mensaje', true)
    xhttp.send()
}

function obtener_respuesta() {
    if (xhttp !=null && xhttp.readyState == 4 && xhttp.status == 200) {
        mensaje = JSON.parse(xhttp.responseText)
        console.log(mensaje.body)
    }
}