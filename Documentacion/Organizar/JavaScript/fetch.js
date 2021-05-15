(()=>{
    const $fetch = document.getElementById('fetch') //seleccionamos el elemento del dom que vamos a modificar
    $fragment = document.createDocumentFragment() //Esto es pa despues agregar mas html

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(respuesta => { //fetch devuelve una respuesta
        console.log(respuesta)
        return  respuesta.ok ? respuesta.json(): Promise.reject(respuesta)//Se convierte la respuesta a json si es positiva y si no se ejecuta un reject para ejecutar el catch
    })
    .then( json =>{ //Despues de convertir en el then anterior la respuesta a json, aca ya podemos utilizarlo
        console.log(json) 
        json.forEach(el =>{ //Creamos un foreach para que por cada elemento de la array se cree un LI
            const $li =document.createElement('li') //De esta manera se crea el LI
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}` //Aca se establece el texto de cada LI
            $fragment.appendChild($li) //De esta manera se crea el html para cada LI
        })
        $fetch.appendChild($fragment) //Asi vinculamos las LI creadas dinamicamente a la ol de html
    })
    .catch((err)=>{ //Se maneja en el error si es que ocurre
        console.log(err)
    })
    .finally(()=>{ //Este codigo se utiliza para ejecutarlo pase lo que pase
        console.log('Esto se va a ejecutar pase lo que pase')
    })
})()