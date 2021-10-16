import express from 'express';
const router = express.Router();

import Persona from '../models/person';

/* Agregar una Persona - POST */
router.post('/person', async(req, res) => {
    const body = req.body;

    try {
        const persona_db = await Persona.create(body);
        res.status(200).json(persona_db);
    } catch (error) {
        return res.status(500).json({
            mensaje:'Ocurrió un error POST',
            error
        });
    }
});

/* Buscar una Persona - GET con parámetros */
router.get('/person/:id', async(req, res) => {
    const _id = req.params.id;
    
    try {
        const persona_db = await Persona.findOne({_id});
        res.json(persona_db);
    } catch (error) {
        return res.status(400).json({
            mensaje:'Ocurrió un error GET-param',
            error
        });
    }
});

/* Buscar una Persona - GET con todos los documentos */
router.get('/person', async(req, res) => {
    
    try {
        const persona_db = await Persona.find();
        res.json(persona_db);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error GET-all',
            error
        });
    }
});

/* Actualizar una Persona - PUT */
router.put('/person/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;

    try {
        const persona_db = await Persona.findByIdAndUpdate(_id,
            body,
            {new: true}
        );
        res.json(persona_db);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error PUT',
            error
        });
    }
});

/* Eliminar una Persona - DELETE */
router.delete('/person/:id', async(req, res) => {
    const _id = req.params.id;
    
    try {
        const persona_db = await Persona.findByIdAndDelete({_id});
        if(!persona_db){
            return res.status(400).json({
                mensaje: 'No se encontró el id indicado',
                error
            });
        }
        res.json(persona_db);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error DELETE',
            error
        });
    }
});

/* Exportamos la configuración de express app */
module.exports = router;