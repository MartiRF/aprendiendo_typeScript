class Padre{
    name:string;
    edad:number;
    constructor(_name:string, _edad:number){
        this.name = _name;
        this.edad = _edad;
    }
    mostrarNombre():void{
        console.log(this.name)
    }
}
class Hijo extends Padre{

    lastName:string;

    constructor(_name:string, _edad:number, _lastName:string){
        super(_name,_edad)
        this.lastName = _lastName
    }

    showNameChild():void{
        console.log(this.name)
    }
}

const newChild = new Hijo('Martin',22,'Reyes')
newChild.mostrarNombre()
newChild.showNameChild()