const express = require('express');
const hbs = require('hbs');
const app = express();
/// importacion de helpers
require('./hbs/helpers/helpers');


////////////////////////////////////////////
/* para subirlo a heroku necesitamos definir el puerto.
heroku nos tiene que dar un puerto 
para saber si estamos en local u online utilizamos
process.env.PORT -> no existe en local */
const port = process.env.PORT || 3000;
//consty port sera env.Port o si no existe 3000

//en package.json añadimos scripts start
///////////////////////////////////////////


///////////////acceso a la carpeta publica //////////////////
// cuidado con esto:  si especificamos __dirname antes de public no funciona
app.use(express.static('public'));

///////////////////ubicacion de partials ////////////////////
hbs.registerPartials(__dirname + '/views/partials');

/////// renderizado express HBS engine //////////////////////
app.set('view engine', 'hbs');


////////////////peticiones de renderizacion/////////////////

// peticiones get renderizan el archivo Home
app.get('/', (req, res) => {
    // podemos pasar un segundo parametro en render con la data
    res.render('home', {
        cabecera: 'es el momento de preSentarse gines',
    });
});

// peticiones get renderizan el archivo about
app.get('/about', (req, res) => {
    res.render('about', {
        src: 'external.jpg',
    });
});



///////especificacion del puerto////////////////////////
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});