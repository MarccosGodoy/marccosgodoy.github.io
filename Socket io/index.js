const path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000
const server = require('http').createServer(app)
const io = require('socket.io')(server, {cors: {origin: "*"}}  )


app.use(express.static(path.join(__dirname ,'public')))
app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
    res.send('Socket.io Chat')
})


server.listen(port, () => {
console.log(`Test app listening at http://localhost:${port}`)
})

io.on('connection', (socket) => {
    console.log('a user connected ' + socket.id);

    socket.on('message', (data) =>{
        console.log(data)
        socket.broadcast.emit('message', data)
        socket.emit('message', data)
    })
});
