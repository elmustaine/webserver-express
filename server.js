const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

// para poner el puerto que asignara heroku 
// poner en en el package.json en los scripts la etiqueta start valor  
//para probar el comando teclear npm start
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
// Express HBSengine
hbs.registerPartials(__dirname + '/views/parciales', function(err) {});
app.set('view engine', 'hbs');


// Con helpers
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'oMar sOLIS'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});



app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});