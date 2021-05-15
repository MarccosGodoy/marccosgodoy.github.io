//trycatch

let despedida = 'adio'

try {
    console.log(hola)
} catch (error) {
    console.log(despedida)
}

try {
    console.log(hola)
} catch (error) {
    console.log(despedida)
}finally{ //Finally se agrega si es que se quiere que se ejecute algo si o si a pesar de habaer error o no
    console.log('no funco el try')
}