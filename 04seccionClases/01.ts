// Introduccion
/*
    clase es una plantilla de un objeto
    Metodos,
    Propiedades,

    Objeto coche:
    propiedades: 
        color
        marca
        etc
    metodos:
        encender,
        frenar,
        acelerar
    cuando llevo una clase a funcional se llama instancia
*/ 
class Vehiculo{
    marca:string
    fecha:string
    llantas:string

    constructor(marca_:string,fecha_:string,llantas_:string){
        this.marca = marca_;
        this.fecha = fecha_;
        this.llantas = llantas_;
    };

    acelerar():void{
        console.log('run run run')
    };

    frenar():void{
        console.log('ese bache grito o que paso')
    };
}

const coche = new Vehiculo('Patito','2002','Todo terreno');
coche.marca
coche.fecha
coche.acelerar()
coche.frenar()


