input = document.getElementById('input')
form = document.querySelector('form')
btn = document.querySelector('button')
socket = io()



socket.on('connection', ()=>{

})

const sendMessage = ()=>{
    let text = input.value
    socket.emit('message', text)
}

socket.on('message', (data)=>{
    let newMsg = document.createElement('li')
    newMsg.textContent = data
    document.getElementById('message').appendChild(newMsg)
})


form.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(input.value)
    input.value = ''
})

