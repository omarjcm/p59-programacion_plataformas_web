console.log( 1 == 1 )
//console.log( 1 = 1 )
console.log( 1 === 1 )

console.log( 1 == '1' )
console.log( 1 === '1' )

console.log( 1 == true )
console.log( 0 == false )

console.log( 1 === true )
console.log( 0 === false )

console.log( 0 == null )
console.log( 0 == undefined )
console.log( null == undefined )
console.log( null === undefined )

console.log( false == null )
console.log( null )
console.log( !null )
console.log( !!null )
console.log( 0 == !!null )

console.log( undefined )
console.log( !undefined )
console.log( !!undefined )

console.log( 0 == !!undefined )

var obj1 = {nombre: 'Guillermo'}
var obj2 = {nombre: 'Guillermo'}

console.log( obj1 == obj2 )
console.log( obj1 == obj1 )

var str1 = 'Hola'
var str2 = String('Hola')
var str3 = new String('Hola')
var str4 = new String('Hola')

console.log( typeof str1 )
console.log( typeof str2 )
console.log( typeof str3 )
console.log( typeof str4 )

console.log( str1 == str2 )

var a = 1
var b = 1

console.log( a == b )

console.log( str1 == str3 )
console.log( str1 === str3 )
console.log( str2 == str3 )
console.log( str3 == str4 )
console.log( str4 == str4 )

var d = new Date()
console.log(d)
var s = d.toString()
console.log(s)

console.log( d == s )
console.log( d === s )