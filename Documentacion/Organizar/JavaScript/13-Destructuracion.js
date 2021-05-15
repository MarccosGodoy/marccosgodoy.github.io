let numeros = [1,2,3]

const [uno, dos, tres] = numeros

console.log(uno,dos,tres)

let persona ={
    nombre: "marcos",
    apellido: "godoy",
    edad: 25
}
//Es importante que el nombre de la variable sea igual que la key que tratamos de descontructurar en los arrays
let {nombre,apellido,edad} = persona;

console.log(nombre,apellido,edad) 