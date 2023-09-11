
function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}

saludar("Rodri")
saludar("Mati")

function presentacion(nombre = "Rodrigo", edad = 32) {
    console.log(`Hola! Me llamo ${nombre} y tengo ${edad} años`);
}

presentacion("Mati", 29)