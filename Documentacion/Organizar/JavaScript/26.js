//callbacks

//una callback es una funcion que se va a ejecutar despues de que otra lo haga

function cuadradoCallBack(value, callback){
    setTimeout(() => {
        callback(value,value * value)
    }, 0 | Math.random()*1000);
}

cuadradoCallBack(2, (value, result)=>{
    console.log('inicia call back')
    console.log(`Callback: ${value}, ${result}`)
})

//Promesas

//Las promesas son como un if/else pero con result/reject, si se cumple nos va a dar result si no, reject

function cuadradoPromise(value){
    if (typeof value !== 'number') {
        return Promise.reject('error el valor ingresado no es un numero')
    }
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({
                value,
                result: value*value
            })
        }, 0|Math.random()*1000);
    }) 
}
cuadradoPromise(0)
.then((obj)=>{
    console.log('Inicio Promise')
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromise(1)
}) //then es el siguiente codigo que se va a ejecutar despues de nuestra funcion, este recibe una funcion, el cual esta ligado al resultado positivo de la promesa
.then((obj)=>{
    console.log('Inicio Promise')
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromise(2)
})
.then((obj)=>{
    console.log('Inicio Promise')
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromise(3)
})
.then((obj)=>{
    console.log('Inicio Promise')
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromise(4)
})
.then((obj)=>{
    console.log('Inicio Promise')
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromise('e')
})
.catch(err => console.error(err)) 


//async - await

async function funcionAsyncronaDeclarada(){
    try {
        console.log('inicio async function')
        let obj = await cuadradoPromise(0)
        console.log(`Async Function: ${obj.value}, ${obj.result}`)

        obj = await cuadradoPromise(1)
        console.log(`Async Function: ${obj.value}, ${obj.result}`)

        obj = await cuadradoPromise('e')
        console.log(`Async Function: ${obj.value}, ${obj.result}`)
    } catch (error) {
        console.error(error)
    }
}

funcionAsyncronaDeclarada()