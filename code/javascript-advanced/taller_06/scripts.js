const formatoFecha = (fecha, locacion, opciones) => new Intl.DateTimeFormat(locacion, opciones).format(fecha)

const ahora = new Date()

console.log( formatoFecha(ahora, 'es') )
console.log( formatoFecha(ahora, 'es', { dateStyle: 'long' }) )
console.log( formatoFecha(ahora, 'es', { timeStyle: 'short' }) )
console.log( formatoFecha(ahora, 'en') )
console.log( formatoFecha(ahora, 'ko') )
console.log( formatoFecha(ahora, 'en', { weekday:'short', day:'numeric' }) )