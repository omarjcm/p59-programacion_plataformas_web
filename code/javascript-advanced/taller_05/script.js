var monedas = null
var xhttp = null

function base_currency() {
    let base = document.getElementById('base_currency');
    var value = base.options[base.selectedIndex].value;
    if (value != "NULL")
        cargar_datos(value)
}

function cargar_datos(base) {
    xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = obtener_respuesta
    xhttp.open('GET', 'https://freecurrencyapi.net/api/v2/latest?apikey=77bdac60-5a07-11ec-a2ae-b7be4bf00aaf&base_currency='+base, true)
    xhttp.send()
}

function obtener_respuesta() {
    if (xhttp !=null && xhttp.readyState == 4 && xhttp.status == 200) {
        monedas = JSON.parse(xhttp.responseText)
        texto = `<ul>
                    <li>AED = ${monedas.data.AED}</li>
                    <li>GBP = ${monedas.data.GBP}</li>
                 </ul>`

        let documento = document.getElementById('documento')
        documento.innerHTML = texto
    }
}