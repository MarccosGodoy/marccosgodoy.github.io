//text to speach

let texto = 'hola, ahora si funciona en español'

const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto))

hablar(texto)