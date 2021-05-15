//Objeto Date

console.log(Date()) //Devuelve la fecha y horario 

let fecha = new Date() //De esta manera le damos los atributos de date a la variable fecha

fecha.getDate() //devuelve el día del mes
fecha.getDay() //Te dice el numero del día en la semana, estan ordenados de domingo a sabado, siendo domingo el 0 y sabado el 6
fecha.getMonth() //Devuelve el mes
fecha.getFullYear() //Devuelve el año
fecha.getHours() // Devuelve horas
fecha.getMinutes() //Devuelve Minutos
fecha.getSeconds() //Devuelve segundos


console.log(fecha.getDate())
console.log(fecha.getDay())
console.log(fecha.getMonth())
console.log(fecha.getFullYear())
console.log(fecha.getHours())
console.log(fecha.getMinutes())
console.log(fecha.getSeconds())
console.log(fecha.toLocaleDateString())
console.log(fecha.toLocaleTimeString())