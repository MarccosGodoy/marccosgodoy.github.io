//Symbols


//Los symbols crea un id unico a pesar de que dos valores sean iguales
const ID = Symbol('hola') //las constantes es ideal escribirlas en mayusculas
const id2= 'hola'

console.log(id === id2)
console.log(id)

const NOMBRE = Symbol()

const persona ={
    [NOMBRE]: 'Marcos'
}