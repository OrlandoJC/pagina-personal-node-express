const hbs = require('hbs');

hbs.registerHelper('getAnio', () => new Date().getFullYear())
hbs.registerHelper('capitalizar', (texto) => texto.toUpperCase())
