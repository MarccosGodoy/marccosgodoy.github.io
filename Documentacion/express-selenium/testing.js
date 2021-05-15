const button = document.getElementById('selenium')

button.addEventListener('click', async ()=>{
    let respuesta = await fetch("http://localhost:5000/selenium")
})