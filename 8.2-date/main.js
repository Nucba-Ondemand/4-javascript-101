// Que es el objeto Date en javascript?

// El objeto Date en javascript nos permite trabajar con fechas y horas, es decir, 
//podemos crear, obtener, modificar fechas, etc.

const hoy = new Date();

console.log(hoy);

// Obtener el dia de la semana

let dia = hoy.getDay();

console.log(dia);

// Obtener el dia del mes

let diaMes = hoy.getDate();

console.log(diaMes);

// Obtener el mes

let mes = hoy.getMonth();

//Explicar que el mes empieza en 0 y termina en 11 y que hay que sumarle 1 para 
//obtener el mes correcto

console.log(mes);

// Obtener el año

let anio = hoy.getFullYear();

console.log(anio);

// Obtener la hora

let hora = hoy.getHours();

console.log(hora);

// Obtener los minutos

let minutos = hoy.getMinutes();

console.log(minutos);

// Crear una fecha

const navidad = new Date("2022-12-25"); //

console.log(navidad);

// Cambiar año en una fecha

navidad.setFullYear(2023);

console.log(navidad);

// Cambiar mes en una fecha

navidad.setMonth(9);

console.log(navidad);

// Cambiar dia en una fecha

navidad.setDate(20);

console.log(navidad);

//Obtener fecha con formato DD/MM/AAAA

//Forma 1

const fechaLegible = hoy.toLocaleDateString();

console.log(fechaLegible);

//Explicar desventajas de la forma 1 a la hora de hostear en un servidor que no 
//maneje el mismo formato de fecha

//Forma 2

const fechaLegible2 = hoy.toISOString().split("T")[0];

console.log(fechaLegible2);

fechaLegible2.split("-").reverse().join("/");

console.log(fechaLegible2);
