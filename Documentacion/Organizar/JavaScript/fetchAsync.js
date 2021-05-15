(()=>{
    const $fetch = document.getElementById('fetchAsync') 
    $fragment = document.createDocumentFragment()

    async function getData(){
        try {
            let respuesta = await fetch("https://jsonplaceholder.typicode.com/users"),
            json = await respuesta.json()

            console.log(respuesta,json)

            if (!respuesta.ok)throw {status: respuesta.status, statusText: respuesta.statusText} //Esta linea de codigo es para manipular la posiblidad de un error en la API

            json.forEach(el =>{ 
                const $li =document.createElement('li') 
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}` 
                $fragment.appendChild($li) 
            })
            $fetch.appendChild($fragment) 

        } catch (error) {
            console.log('hubo un error papu')
        } finally{
            console.log('se ejecuta sin importarque pase')
        }
        
    }

    getData()
})()