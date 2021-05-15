//Parametros Rest & Operator dpread

//Rest 

//Los parametros rest se utilizan para cuando no sabemos si vamos a agregar más parametros o no, se declaran poniendo tres puntos suspensivos seguidos del nombre del parametro nuevo
function sumar(a, b,...c){
    let resultado = a + b;

    c.forEach(function(n){
        resultado += n
    });
    return resultado;
}


console.log(sumar(1,2))
console.log(sumar(1,2,4))

//Spread


const arr1 = [1,2,3,4,5], arr2=[6,7,8,9,0]
console.log(arr1,arr2)

const arr3 = [...arr1,...arr2]

console.log(arr3)
