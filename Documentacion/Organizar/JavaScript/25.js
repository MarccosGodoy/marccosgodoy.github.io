//setTimeout y setInterval

setTimeout(()=>{
    console.log('hola')
}, 1000) //setTimeout ejecuta el codigo que le pongamos despues del tiempo que le establecemos que espere y lo hace por una sola vez

clearTimeout()//Quita el timeout, pero para que funcione el timeout tiene que estar almacenado en una variable


let temporizador = setInterval(() => {
    console.log('esto es un intervalo')
}, 2000); //Una vez pasado el tiempo establecido se va a empezar a ejecutar constantemente el codigo con el tiempo establecido como pausa

clearInterval(temporizador) //Quita el interval que haya almacenado en una variable