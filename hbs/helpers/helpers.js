const hbs = require('hbs');


////////////////helpers para partials/////////////////////////
// helpers son fuciones que disparan cuando el template lo requiere
// se insertan directamente en el template
// recomendacion , usarlas coger variables ne los partials

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});