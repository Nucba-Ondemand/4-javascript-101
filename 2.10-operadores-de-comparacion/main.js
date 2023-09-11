//Operadores de comparacion

//Comparador de igualdad

console.log("Igualdad");

console.log(5 == 5);
console.log("5" == "5");
console.log(5 == "5");

//Comparador de igualdad estricta

console.log("Igualdad estricta");

console.log(5 === 5);
console.log("5" === "5");
console.log("5" === 5);

console.log("Desigualdad");

console.log(5 != 5);
console.log("5" != "5");
console.log(5 != "5");

console.log("Desigualdad estricta");

console.log(5 !== 5);
console.log("5" !== "5");
console.log(5 !== "5");


console.log("Mayor que");

console.log(10 > 5);
console.log(5 > 10);
console.log(5 > 5);

console.log("Mayor o igual que");

console.log(10 >= 5);
console.log(5 >= 10);
console.log(5 >= 5);

console.log("Menor que");

console.log(10 < 5);
console.log(5 < 10);
console.log(5 < 5);

console.log("Menor o igual que");

console.log(10 <= 5);
console.log(5 <= 10);
console.log(5 <= 5);

//And

console.log("AND");

console.log(5 < 10 && 10 > 5 );
console.log(5 > 10 && 10 > 5);
console.log(5 > 10 && 10 < 5);

//Or

console.log("OR");

console.log(5<10 || 10 > 5);
console.log(5 > 10 || 10 > 5);
console.log(5 > 10 || 10 < 5);

//Negar

console.log("Negar");

let algoTrue = 5 < 10
let algoFalse = 5 > 10

console.log(!algoTrue);
console.log(!algoFalse);