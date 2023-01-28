// un bloque de codigo reutilizable.
//funcion simple
function sumar(a, b) {
    return a + b;
}
var suma = sumar(2, 2);
console.log(suma);
//modos funciones 
function mostrar() {
    console.log('Funcion 1');
}
var mostrarV2 = function (str) {
    console.log('Funcion 2');
};
mostrar();
mostrarV2('Hola mundo');
// parametros opcionales se usa el simbolo '?' despues de la declarion y antes de tipo
var opcionales = function (nombre, apellido, edad) {
    console.log("Hola ".concat(nombre, " ").concat(apellido, " tu edad es ").concat(edad));
};
// parametros por defecto
var imprimir = function (nombre, apellido, edad) {
    return "Se llama ".concat(nombre, " se apellida ").concat(apellido, " y su edad es de ").concat(edad);
};
