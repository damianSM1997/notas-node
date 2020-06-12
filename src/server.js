const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');

const app = express();

//configurariones

app.set('port', process.env.PORT || 3000);
//parte para que mande al carajo en donde esta esta carpeta
// y con dirname lo hace
// asi no es xd app.set('views', path.join(__dirname + 'views'));
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
//para ocupar el ingine

app.set('view engine', '.hbs');

//middlewares estos son funciones que se ejecutan para hacer peticiones
app.use(morgan('dev'));
//hace posible que el servidor entienda los objetos enviados desde el html
app.use(express.urlencoded({ extended: false }));


//variagles globales


//rutas
//app.get('/', (req, res) => {
//    res.render('index');
//})
// va a buscar aqui las rutas
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));

//static files  //aqui puedes dejar de ocupar el direccionamiento todo te lleva
// a esta ruta por defecto
app.use(express.static(path.join(__dirname, 'public')));
//esta linea es para que sepa que ahi esta la carpeta publica
app.use(express.static(path.join(__dirname + 'views')));




module.exports = app;