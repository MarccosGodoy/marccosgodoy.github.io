//POO

/* 
Clases - Modelo a seguir
Objetos - Es una instancia de una clase
-Atributos - Variables dentro de un objeto
-Metodos - acciones que un objeto puede realizar
*/

const animal = {
    nombre: 'Snoopy',
    sonar(){
        console.log('Makes noice')
    }
}

console.log(animal)


//Funcion constructora

function Animal(nombre,genero){
    this.nombre = nombre 
    this.genero = genero
    //es ideal crear solo atributos dentro del constructor
}
//Los metodos es ideal agregarlos de esta manera para que no se dupliquen por cada nuevo "animal" que creemos
Animal.prototype.sonar = function (){
    console.log('Makes noice')
};


//Se crea un "nuevo animal" los cuales heredan las funciones escritas dentro del constructor previamente creado
const snoopy = new Animal('Snoopy', 'Macho')
const lolaBunny = new Animal ('Lola Bunny', 'Hembra')

console.log(snoopy)
console.log(lolaBunny)

lolaBunny.sonar()

//herencia prototipica

function Perro(nombre,genero, size){
    this.super = Animal //Creando esto hereda lo que sea que contenga el constructor anterior
    this.super(nombre,genero)
    this.size = size
}


Perro.prototype = new Animal() //Perro heredando de animal
Perro.prototype.constructor = Perro;

const ivy = new Perro('Ivy', 'Mestiza', 'Mediana')

console.log(ivy)
ivy.sonar()