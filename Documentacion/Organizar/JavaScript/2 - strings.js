//Una string se puede declarar de 3 maneras diferentes
"hola"
'hola'
`hola`

let hola = "hola"
let hello = new String('Hola')
let sujeto = 'papu'

console.log(hola.length) //Sirve para saber la longitud de caracteres de la string

//Metodos
hola.length //longitud de la string
hola.toUpperCase // Todo mayusculas
hola.toLowerCase // todo minuscula
hola.includes('hola') //Se fija si incluye lo que le pasemos en parentesis
hola.trim() //Quita espacios en blanco
hola.split(",") // Genera una lista separando el contenido de la string por el separador que le otorgemos entre parentesis
hola.toString //Convierte el contenido a string


//Concatenacion

(hola + papu)

`${hola} ${papu}`