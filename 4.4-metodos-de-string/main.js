let nombre = "Rodrigo"

//length
console.log(nombre.length);

//toUpperCase

console.log(nombre.toUpperCase());

//toLowerCase

console.log(nombre.toLowerCase());

let chocolatePreferido = "Chocolate negro"

//replace

console.log(chocolatePreferido.replace("negro", "blanco"));

//Trim

let stringConEspacios = "    Hola, soy Rodrigo    "

console.log(stringConEspacios.trim());

let stringLargo = "Hola, soy Rodrigo, tengo 31 años, trabajo en Nucba y utilizo React"

//split

console.log(stringLargo.split("31"))

//repeat

console.log(nombre.repeat(5));

//charAt

console.log(nombre.charAt(2));

//concat

console.log(nombre.concat(" ", "Troncoso"));
console.log(nombre.concat(chocolatePreferido));

//includes
console.log(stringLargo.includes("Nucba"));
console.log(stringLargo.includes("Nuc"));
console.log(stringLargo.includes("nuc"));
console.log(stringLargo.includes("mesa"));

//slice

console.log(stringLargo.slice(8, 15));
console.log(stringLargo.slice(8));