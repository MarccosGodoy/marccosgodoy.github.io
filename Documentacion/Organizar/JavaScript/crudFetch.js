//Fetch

const d = document,
$table = d.querySelector('.crud-table'),
$form = d.querySelector('.crud-form'),
$title = d.querySelector('.crud-title'),
$template = d.getElementById('crud-template').content,
$fragmento = d.createDocumentFragment()


const getAll = async ()=>{
    try {
        let res = await fetch("http://localhost:3000/santos"),
        json = await res.json()

        if (!res.ok)throw {status: res.status, statusText: res.statusText}

        console.log(json)

        json.forEach(el =>{ 
            $template.querySelector(".name").textContent = el.nombre;
            $template.querySelector(".constelation").textContent = el.constelacion;
            $template.querySelector(".edit").dataset.id = el.id
            $template.querySelector(".edit").dataset.constelation = el.constelacion
            $template.querySelector(".delete").dataset.id = el.id

            let $clone = d.importNode($template, true)
            $fragmento.appendChild($clone)
        })

        $table.querySelector("tbody").appendChild($fragmento)

    } catch (err) {
        let message = err.statusText || "Ocurrio un error"
        $table.insertAdjacentHTML("afterend", `<p> Error ${err.status} ${message}</p>`)
    }
}

d.addEventListener("DOMContentLoaded", getAll)

d.addEventListener("submit", async e =>{
    if (e.target === $form) {
        e.preventDefault();
       if (!e.target.id.value ) {
           //Create POST
            try {
                let options= {
                    method: "POST",
                    headers:{
                        "Content-type": "application/json; charset=utf-8"
                    },
                    body: JSON.stringify({
                        nombre: e.target.nombre.value,
                        constelacion: e.target.constelacion.value
                    })
                },
                res = await fetch("http://localhost:3000/santos", options),
                json = await res.json()
                if (!res.ok)throw {status: res.status, statusText: res.statusText}
            } catch (err) {
                let message = err.statusText || "Ocurrio un error"
                $table.insertAdjacentHTML("afterend", `<p> Error ${err.status} ${message}</p>`)
            }
       }else{
           //UPDATE PUT
       }

    }
})


d.addEventListener('click', e =>{
    if (e.target.matches("edit")) {
        $title.textContent = "Editar Santo"
        $form.nombre.value = e.target.dataset.name
        $form.constelacion.value = e.target.dataset.constelation
        $form.id.value = e.target.dataset.id
    }
})