

const funcionPadre = () => {
    let numero = 5
    const funcionHijo = () => {
        numero = numero + 1
        return numero
    };

    return funcionHijo
}


const closure = funcionPadre();

console.log(closure);