// https://scrollrevealjs.org/guide/installation.html

import ScrollReveal from "scrollreveal";
const discoverSection = document.getElementById("discover");
const infoSection = document.getElementById("info");
const productsSection = document.getElementById("products");
const heroSection = document.getElementById("hero");

/**
 * Función que revela una sección con efecto de scroll
 * @param {object} section sección a revelar
 */
const revealSection = (section) => {
  ScrollReveal().reveal(section, {
    delay: 200, // Lo que tarda en iniciar el efecto
    distance: "100px", // Distancia que recorre el elemento
    duration: 1000, // Duración del efecto
    origin: "bottom", // Desde donde aparece el elemento
    reset: false, // Si se debe reiniciar el efecto y volver a ejecutarse
  });
};

// función inicializadora de efectos de scroll
export const scrollEffectsInit = () => {
  revealSection(heroSection);
  revealSection(discoverSection);
  revealSection(infoSection);
  revealSection(productsSection);
};
