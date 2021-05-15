(()=>{
    const xhr = new XMLHttpRequest(), //Se crea un elemento xmlhttprequest
    $xhr = document.getElementById('xhr') //seleccionamos el elemento del dom que vamos a modificar
    $fragment = document.createDocumentFragment() //Esto es pa despues agregar mas html

    console.log(xhr)
    xhr.addEventListener("readystatechange", e =>{
        if (xhr.readyState !== 4)return;
        if (xhr.status >= 200 && xhr.status<300) { //Con este if controlamos que pasa si resulto positivo
            console.log('exito')
            let json = JSON.parse(xhr.responseText) //Convertimos el la string que nos devuelve en json para utilizarlo
            console.log(json)

            json.forEach(el =>{ //Creamos un foreach para que por cada elemento de la array se cree un LI
                const $li =document.createElement('li') //De esta manera se crea el LI
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}` //Aca se establece el texto de cada LI
                $fragment.appendChild($li) //De esta manera se crea el html para cada LI
            })
            $xhr.appendChild($fragment) //Aca se vincula cada LI creada la ol con el id xhr
        }else{ //Controlamos si salio negativo
            console.log('error')
        }
    }) //No sé

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users") //De esta manera se consume la api, primero le pasamos el metodo, que es GET, por que vamos a obtener y despues se pasa la url de donde se va a obtener la informacion

    xhr.send() //Con esto se ejecuta la peticion a la api
})();