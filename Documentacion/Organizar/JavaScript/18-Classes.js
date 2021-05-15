class Animal{
    constructor(nombre, genero){ //Para recibir parametros una clase tiene que contener un constructor
        this.nombre = nombre 
        this.genero = genero
    }
    sonar(){
        console.log('hace ruido')
    }
}

const mimi = new Animal('mimi', 'hembra')


class Perro extends Animal{
    constructor(nombre,genero,size){
        super(nombre,genero)
        this.size = size
    }
}