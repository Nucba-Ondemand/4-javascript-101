//Crear un objeto literal

let auto = {
    marca: "Fiat",
    modelo: "Uno",
    anio: 2002,
    combustible: "Nafta",
    seguro: true,
    color: ["Rojo", "Azul", "Negro"]
}

console.log(auto);

console.log(auto["anio"]);

console.log(auto.modelo);

auto.anio = 2005;

console.log(auto);

auto.patente = "qwe123"

console.log(auto);

