import express from 'express';
import { router } from "./routes/index.js";
import db from './config/db.js';

const app = express();


//conectar base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch((error) => console.log(error));

//Definri puerto
const port = process.env.PORT || 4000;

//Agregar body parser parea leer formualrio
app.use(express.urlencoded({ extended: true }))



// Definir carpeta publica
app.use(express.static('public'));


// habilitar PUG
app.set('view engine', 'pug');

// obtener year actual
app.use((req, res, next) => {
    const yearObject = new Date();

    res.locals.year = yearObject.getFullYear();

    //nombre web site
    res.locals.nombreSitio = 'Agencia de Viajes';


    next();
})


// agregar router
app.use('/', router);

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})

