class Animal{
    private nombre:string;
    private size:number;
    public constructor(_nombre:string, _size:number){
        this.nombre = _nombre;
        this.size = _size;
    }

    public moverse():void{
        console.log('Me estoy moviendo')
    }
}

const obj = new Animal('serpierte',1)

obj