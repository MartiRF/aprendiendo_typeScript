// un platilla como una clase
interface Persona{
    //Atributos
    nombre:string
    


}

function caminar(persona:Persona):void{
    console.log('la persona ' + persona.nombre + ' esta caminando');
}

let nueva_persona = { nombre:'Manuel' }
caminar(nueva_persona)