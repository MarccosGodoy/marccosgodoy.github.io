//Ajax

const d = document,
$table = d.querySelector('.crud-table'),
$form = d.querySelector('.crud-form'),
$title = d.querySelector('.crud-title'),
$template = d.getElementById('crud-template').content,
$fragmento = d.createDocumentFragment()

const ajax = (options) =>{
    let {url,method,succes,error,data} = options;
    const xhr = new XMLHttpRequest()

    xhr.addEventListener('readystatechange', e =>{
        if (xhr.readyState !== 4)return;
        if (xhr.status >= 200 && xhr.status<300){
            let json = JSON.parse(xhr.responseText);
            succes(json)
        }else{
            let message = xhr.statusText || 'Ocurrio un error'
            error(`Error ${xhr.status} ${message}`)
        }
    })

    xhr.open(method || "GET", url)
    xhr.setRequestHeader("Content-type","application/json; charset=utf-8")
    xhr.send(JSON.stringify(data))


}

const getAll = ()=>{
    ajax({
        method: "GET",
        url: "http://localhost:3000/santos",
        succes: (res)=>{
            console.log(res);
            res.forEach(el =>{
                $template.querySelector('name').textContent = el.nombre
                let $clone = d.importNode($template, true)
                $fragmento.appendChild($clone)
            })
            $table.querySelector('tbody').appendChild($fragmento)
        },
        error:(err)=>{
            console.log(err);
            $table.insertAdjacentHTML("afterend", `<p>${err}</p>`)

            
        },
        data: null
    })
}

d.addEventListener("DOMContentLoaded", getAll)