

let promedioCalificaciones = (nombre, apellido, ...rest) => {
    arrayCalificaciones = [...rest]
    let suma = 0
    for (let i = 0; i < arrayCalificaciones.length; i++) {
        suma = suma + arrayCalificaciones[i]
    }
    return console.log(
        `El promedio de calificaciones de ${nombre} ${apellido} es ${
            suma / arrayCalificaciones.length
        }`
    );
}

promedioCalificaciones("Rodrigo", "Troncoso", 8, 10, 7, 6, 2)