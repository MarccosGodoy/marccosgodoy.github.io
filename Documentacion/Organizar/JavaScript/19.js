//Metodos Estaticos, getters y setters

class Animal{
    constructor(nombre, genero){ //Para recibir parametros una clase tiene que contener un constructor
        this.nombre = nombre 
        this.genero = genero
    }
    sonar(){
        console.log('hace ruido')
    }
    static queEres(){ //Los metodos estaticos se pueden llamar sin la necesidad de crear un nuevo item "animal"
        console.log('un tipazo')
    }
}

const mimi = new Animal('mimi', 'hembra')


class Perro extends Animal{
    constructor(nombre,genero,size){
        super(nombre,genero)
        this.size = size
        this.raza = null
    }
    get getRaza(){
        return this.raza
    }

    set setRaza(raza){
        this.raza = raza
    }
}

const scooby = new Perro('Scooby', 'Macho', 'Gigante')

//Los getters y setters son metodos especialesa que nos permitean establecer y obtener valores de atributos de nuestra clase

console.log(scooby.getRaza)
scooby.setRaza = 'Gran Danes'
console.log(scooby.getRaza)
console.log(scooby)
