//Bucle for

//for (inicio, condicion, actualizacion) {
    //Código a ejecutar
//}


for (let i = 1; i < 11; i++) {
    //console.log(`Hola! Estoy en la iteración numero ${i}`);
}

for (let i = 10; i >= 0; i--) {
    //console.log(`Estoy haciendo una cuenta regresiva ${i}`);
}

//WHILE

// while (condicion) {
//     Codigo a ejecutar
// }

let condicionDelWhile = 22;

// while (condicionDelWhile < 10) {
//     console.log(`El while está en ${condicionDelWhile}`);
//     condicionDelWhile++
// }

while (condicionDelWhile < 10) {
    if (condicionDelWhile === 5) {
        console.log("El while esta en la iteración número 5");
    }
    condicionDelWhile++
}


//DO WHILE

let condicionDelDoWhile = 55;

do {
    console.log(condicionDelDoWhile);
    condicionDelDoWhile++
} while (condicionDelDoWhile < 10)