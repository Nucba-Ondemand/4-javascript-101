const divRender = document.querySelector("#render");

let stringARenderizar = "";

let stringAGuardar = "Buenas! Voy a quedarme en tu local storage";

localStorage.setItem("miString", stringAGuardar);

stringARenderizar = localStorage.getItem("miString");

divRender.innerHTML = stringARenderizar;
