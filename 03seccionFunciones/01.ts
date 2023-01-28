// un bloque de codigo reutilizable.

//funcion simple
function sumar(a:number, b:number):number{
    return a + b;
}
const suma:number = sumar(2,2)
console.log(suma)

//modos funciones 
function mostrar():void{
    console.log('Funcion 1')
}

const mostrarV2 = (str:string):void => {
    console.log('Funcion 2')
}

mostrar()
mostrarV2('Hola mundo')

// parametros opcionales se usa el simbolo '?' despues de la declarion y antes de tipo
const opcionales = (nombre:string, apellido:string, edad?:number) => {
    console.log(`Hola ${nombre} ${apellido} tu edad es ${edad}`)
}
// parametros por defecto
    //edad:number = 32
const imprimir = (nombre:string, apellido:string, edad:number = 20) => {
    return `Se llama ${nombre} se apellida ${apellido} y su edad es de ${edad}`
}
// parametros REST
const cartaPostres = (postre:string, ...frutas:string[]):void => {
    console.log(`El postre es: ${postre} y tiene ${frutas}`)
}
cartaPostres('postre1','manzana','naranja')