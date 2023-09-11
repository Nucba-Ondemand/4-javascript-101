let objetoModelo = {
	nombre: "Rodrigo",
	edad: 31,
	tecnologias: ["HTML", "CSS", "Javascript", "React"],
	grabando: true,
};

console.log("Objeto Modelo");
console.log(objetoModelo);

let objetoEnJSON = JSON.stringify(objetoModelo);

console.log("Objeto en JSON");
console.log(objetoEnJSON);

// {
//     "nombre":"Rodrigo",
//     "edad":31,
//     "tecnologias":["HTML","CSS","Javascript","React"]
//     ,"grabando":true
// }

let objetoParseado = JSON.parse(objetoEnJSON);

console.log("Objeto parseado");
console.log(objetoParseado);
