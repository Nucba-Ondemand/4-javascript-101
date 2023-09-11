let cuentaAtras = (numero) => {
    if (numero === 0) {
        return console.log(0);
    }
    console.log(numero);
    return cuentaAtras(numero - 1)
}

//cuentaAtras(5)

let duplicar = (num) => {
    num = num + num
    console.log(num);

    if (num > 100) {
        return console.log("El número ya es muy grande");
    }

   return duplicar (num)
}

duplicar(2)