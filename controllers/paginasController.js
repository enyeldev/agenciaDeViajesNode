import { Testimonal } from "../models/Testimoniales.js";
import { Viaje } from "../models/Viaje.js";


export const paginaInicio = async (req, res) => {

    // Consultar 3 viajes del modelo viaje

    const promiseDB = [];

    promiseDB.push(Viaje.findAll({ limit: 3 }));
    promiseDB.push(Testimonal.findAll({ limit: 3 }));

    try {

        const resultado = await Promise.all(promiseDB)

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimonios: resultado[1]
        });
    } catch (error) {
        console.log(error);
    }

};

export const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
};

export const paginaViajes = async (req, res) => {

    // Consultar DB
    try {
        const viajes = await Viaje.findAll();

        res.render('viajes', {
            pagina: 'Proximos Viajes',
            viajes
        });
    } catch (error) {
        console.log(error);
    }

};


// muestra un viaje por su slug
export const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params

    try {
        const resultado = await Viaje.findOne({ where: { slug } })

        console.log(resultado);

        res.render('viajeDetalle', {
            pagina: 'Informacion Viaje',
            resultado
        })
    } catch (error) {
        console.log(error);
    }
}


export const paginaTestimoniales = async (req, res) => {

    try {
        const testimonios = await Testimonal.findAll();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimonios
        });
    } catch (error) {
        console.log(error);
    }

}




