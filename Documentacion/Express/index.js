const express = require('express') //Importacion de express
const morgan = require('morgan')

const app = express() //Ejecucion de express


//Settings
app.set('appName', 'Express Tutorial') //Primero se declara el nombre de una "variable" y despues el contenido
app.set('port', 5000) //"port" es un nombre reservado el cual sirve para indicar en que puerto se va ejecutar

//Motor de plantillas - template engine
app.set('view engine', 'ejs')




//Un middleware es una funcion que se ejecuta antes de que llegue la peticion a la ruta deseada
function logger(req,res,next){
    //Esto es un middleware
    console.log(`Rout Recived: ${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next()
}


app.use(express.json()) //Habilita express a usar json
app.use(logger) //Las funciones middleware funcionan para todas las rutas
app.use(morgan('dev')) //Esto es un modulo que hace lo mismo que el logger pero ya esta precreado

app.all('/user', (req,res,next) =>{ //Es una manera de ejecutar una funcion siempre pase lo que pase, para todas las rutas que le pasemos 
    console.log("Por aqui paso")
    next() //El parametro next se utiliza para que no se frene el codigo en este primer codigo

}) 


//Rutas


app.get('/', (req,res) =>{
    res.render('index.ejs')
})

app.get("/user", (req,res) =>{
    //res.send('Cameron')
    res.json({
        userName: "Cameron",
        lastName: "Hove"
    })
})


app.post("/user/:id", (req,res) =>{ //se puede crear una ruta dinamica poniendo /: y el parametro que queremos recibir
    console.log(req.body) //Retorna lo que lleva el body
    console.log(req.params) //Retorna el parametro
    res.send('PETICION POST')
})


app.put("/user/:id", (req,res) =>{
    console.log(req.body)
    res.send(`User ${req.params.id} updated`)
})

app.delete("/user/:id", (req,res) =>{
    res.send(`User ${req.params.id} deleted `)
    res.send("PETICION DELETE")
})

app.use(express.static('public'))//Entra a la carpeta public y carga el index.html

app.listen(app.get('port'), ()=>{
    console.log(app.get('appName'))
    console.log(`Server on port ${app.get('port')}`)
}) //Se declara el puerto donde va a estar alojado el servidor

