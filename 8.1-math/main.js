//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math

// Math.round() redondea al entero más cercano

const round = Math.round(1.5);

console.log(round);

// Math.floor() redondea hacia abajo

const floor = Math.floor(1.5);

console.log(floor);

// Math.ceil() redondea hacia arriba

const ceil = Math.ceil(1.5);

console.log(ceil);

// Math.random() devuelve un número pseudoaleatorio entre 0 y 1

const random = Math.random();

console.log(random);

const randomEntre0y5 = Math.random() * 5;

console.log(randomEntre0y5);

const randomEntre5y10 = Math.random() * 5 + 5;

console.log(randomEntre5y10);

// Math.max() devuelve el número más alto de una lista de números

const max = Math.max(3, 5, 9, 10);

console.log(max);

const arrayDeNumeros = [3, 5, 9, 10];

const maxEnArray = Math.max(...arrayDeNumeros);

console.log(maxEnArray);

// Math.min() devuelve el número más bajo de una lista de números

const min = Math.min(3, 5, 9, 10);

console.log(min);

// Math.trunc() elimina la parte decimal de un número

const trunc = Math.trunc(1.5);

console.log(trunc);
