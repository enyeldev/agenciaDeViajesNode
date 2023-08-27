import { Testimonal } from "../models/Testimoniales.js";


export const guardarTestimonial = async (req, res) => {
    const userMensaje = req.body;
    const { nombre, correo, mensaje } = userMensaje;

    //validar formulario
    const arrDatosFormulario = [nombre.trim(), correo.trim(), mensaje.trim()];
    const anyEmpty = arrDatosFormulario.some(e => e === '');

    if (anyEmpty) {

        //Consultar testimoniales existentes
        const testimonios = await Testimonal.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            mensajeError: 'Debe completar todos los campos',
            nombre,
            correo,
            mensaje,
            testimonios
        })
        return;
    }
    // Almacenarlo en la base de datos
    try {
        await Testimonal.create({
            nombre,
            correo,
            mensaje
        });

        res.redirect('/testimoniales');
    } catch (error) {
        console.log(error);
    }


}