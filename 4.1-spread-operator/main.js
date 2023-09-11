let arrayOriginal = [1, 2, 3, 4, 5, 6]

let asignarArray = arrayOriginal

//asignarArray[0] = 48

let spreadArray = [...arrayOriginal]

spreadArray[0] = 86

console.log("Original " + arrayOriginal);
console.log("Asignado " + asignarArray);
console.log("Spread " + spreadArray);

let objetoOriginal = {
    nombre: "Rodrigo",
    edad: 32,
}

let objetoSpread = {
    ...objetoOriginal,
    apellido: "Troncoso"
}

let objetoDobleSpread = {
    ...objetoSpread,
    Trabajo: "React Developer"
}

console.log(objetoOriginal);
console.log(objetoSpread);
console.log(objetoDobleSpread);