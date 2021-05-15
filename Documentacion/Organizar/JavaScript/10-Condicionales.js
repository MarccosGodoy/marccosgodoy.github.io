

let edad = 25 

if (edad >= 18) {
    console.log('Sos mayor')
}
else if(edad < 18 ){
    console.log('Sos menor')
}
else{
    console.log('ingresa tu edad')
}



//Operador ternario
let eresMayor = (edad >= 18) //Condicion
    ? 'Eres mayor de edad' //Lo que va despues del signo de pregunta se ejecuta si es verdadero
    : 'Eres menor de edad' //Lo que va despues de los dos puntos se ejecuta si es falso
console.log(eresMayor)

let dia = 2

switch (dia) {
    case 0:
        console.log('Domingo')
        break;
    case 1:
        console.log('Lunes')
        break;
    case 2:
        console.log('Martes')
        break;
    default:

        break;
}