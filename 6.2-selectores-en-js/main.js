console.log(window);
console.dir(document);

//Por ID unico

const main = document.getElementById("main")

console.log(main);

//Por ID duplicado

const idDuplicado = document.getElementById("section")

console.log(idDuplicado);

//por classname varios

const h2 = document.getElementsByClassName("section_h2")

console.log(h2);

//por classname unico

const mainByClass = document.getElementsByClassName("main")

console.log(mainByClass);

//por tagname varios

const p = document.getElementsByTagName("p")

console.log(p);

//por tagname unico

const h1 = document.getElementsByTagName("h1")

console.log(h1);

//Por queryselector unico

const otroMain = document.querySelector(".main")

console.log(otroMain);

//por queryselector varios

const sectionH2 = document.querySelector(".section_h2")

console.log(sectionH2);

//por queryselectorall varios

const sectionP = document.querySelectorAll("#section_p")

console.log(sectionP);

//por queryselectorall unico

const mainId = document.querySelectorAll("#main")

console.log(mainId);