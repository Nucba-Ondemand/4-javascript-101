const h1 = document.querySelector("h1")

console.dir(h1);
console.log(h1.innerHTML);

h1.innerHTML = "Estoy siendo cambiado desde JS"

const p = document.querySelector("#section_p")

console.dir(p);

p.innerHTML = "Yo también estoy siendo<b> cambiado</b> desde JS"

const segundoSection = document.querySelector("#segundoSection")

console.log(segundoSection);

segundoSection.innerHTML = `
    <h2 class="section_h2"> Esto es un H2 creado desde JS </h2>
    <p id="p_js">Esto es un p creado desde JS</p>
`