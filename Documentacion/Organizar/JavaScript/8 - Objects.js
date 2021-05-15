//Los objetos son como los diccionarios en python

const objeto = {

}

const marcos = {
    nombre: "Marcos",
    apellido: "Godoy",
    edad: 25,
    pasaTiempos: ["Hacer ejercicio", "Programar"],
    soltero: true,
    contacto: {
        email: "maarcos29@gmail.com",
        instagram: "marccosgodoy"
    },
    saludar: function () {
        console.log('Hola')
    },
    decirMiNombre: function(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y me podes encontrar en instagram como ${this.contacto.instagram}`) //This se utiliza para hacer referencia donde se encuentra  el objeto que queremos utilizar
    }
}

console.log(marcos)
console.log(marcos.nombre)
console.log(marcos["apellido"])
marcos.saludar()
marcos.decirMiNombre()


//Metodos

console.log(Object.keys(marcos)) //Sirve para listar todas las llaves de una array
console.log(Object.values(marcos)) //Sirve para listar todos los valores dentro de las llaves
console.log(marcos.hasOwnProperty("nombre")) //Es para chequear si tiene la propiedad que le pasemos entre parentesis