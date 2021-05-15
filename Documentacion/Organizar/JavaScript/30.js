//event handler

const alerta = ()=>{
    alert('hola papu')
}

let boton = document.getElementById("botondiabolico")
let titulo = document.querySelector("h1")
let parrafo = document.getElementById("parrafodiabolico")

const enviarAlerta = ()=>{
    boton.innerHTML = 'cambie'
    titulo.innerHTML = 'hola'
}

const cambiarTexto = ()=>{
    parrafo.innerHTML = 'cambie mi texto mi rey'
}

const crearElemento = ()=>{
    document.createElement("p").innerHTML = 'parrafo nuevo pa'
}


boton.addEventListener("click", enviarAlerta) //Es una manera de asignar funciones, las funciones no llevan parentesis
boton.addEventListener('click', cambiarTexto) //Gracias a event hanndler se le puede pasar muchas funciones a un elemento