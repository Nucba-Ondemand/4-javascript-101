// if ( "Lo que esta aca adentro es true" ) {
 //   "Lo que esta aca adentro, se va a ejecutar"
//}

if (2 < 4) {
    console.log("Estoy dentro del if");
}

console.log("Estoy fuera del if");

if (2<4){
    console.log("Me ejecuto yo");
} else {
    console.log("Sino me ejecuto yo")
}

let edad = 25

if (edad < 18) {
    console.log("Sos menor de edad");
} else if (edad > 24) {
    console.log("Sos mayor de edad y tenes mas de 24 años");
} else {
    console.log("Sos mayor de edad");
}


let tecnologia = "CSS"

switch (tecnologia) {
    case "HTML":
        console.log("Suerte con las etiquetas");
        break;
    case "CSS":
        console.log("A darle estilo a todo!");
        break;
    case "Javascript":
        console.log("Welcome to JS");
        break;
    case "React":
        console.log("Manejá bien los estados");
        break;
    default:
        console.log("No estas estudiando nada sobre front en stack MERN");
        break;
}