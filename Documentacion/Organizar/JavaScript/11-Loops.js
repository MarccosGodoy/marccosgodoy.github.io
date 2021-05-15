let contador = 0

while (contador <= 20) {
    console.log(contador)
    contador ++
}

do{
    console.log(contador)
    contador++
} while (contador < 10){
    console.log('hola')
};


let contadour = 0
for (let i = 0; i< 10; i++) {
    console.log('for ' + i)
}


let numeros = ['Hola','Papu', 'Como', 'Estas']

for (let i = 0; i < numeros.length; i++) {
    console.log('numeroides '+ numeros[i]);
    
}

numeros.forEach(i => console.log('for icheano ' + i))


//forin es util para diccionarios/objetos

const marcos = {
    nombre: "Marcos",
    apellido: "Godoy",
    edad: 25
}

for (const key in marcos) {
    console.log(key) //Muestra la llave
    console.log(marcos[key]) //Muestra el contenido
}

//forof sirve para cualquier cosa menos arrays/diccionarios
for (const elemento of numeros) {
    console.log(elemento)
}