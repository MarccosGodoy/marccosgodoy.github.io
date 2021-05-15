let nombre = 'Ivy', edad= 8

const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function(){
        console.log('Guau guau')
    }
}

console.log(perro)
perro.ladrar()
//De esta manera si creamos una key con el mismo nombre que la variable que le vamos a asignar javascript lo detecta automaticamente
const dog = {
    nombre,
    edad,
    ladrad(){
        console.log('Guau guau guau')
    } //Tambien se pueden simplificar las funciones quitando los dos puntos y la palabra "function"
}

console.log(dog)