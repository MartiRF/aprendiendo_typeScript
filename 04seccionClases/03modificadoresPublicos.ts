class Animal{
    public nombre:string;
    public size:number;
    public constructor(_nombre:string, _size:number){
        this.nombre = _nombre;
        this.size = _size;
    }

    public moverse():void{
        console.log('Me estoy moviendo')
    }
}

const obj = new Animal('serpierte',1)

