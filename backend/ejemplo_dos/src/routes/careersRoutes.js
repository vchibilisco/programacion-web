const express = require('express');

const { findAll, create, findById, updateById, deleteById } = require('../services/careersServices');
const { validateById, validateBody } = require('../middleware/careersMiddleware');

const router = express.Router();

//** Definimos todas las rutas */
/**obtener todos */
router.get('/', async (req, res) => {
    try {
        const careers = await findAll();
        res.json(careers);
    } catch (error) {
        res.sendStatus(500);
    }
});

/**obtener por id */
router.get('/:id', validateById, async (req, res) => {
    try {
        const career = await findById(Number(req.params.id));

        if (!career) {
            res.status(404).json({
                message: 'Career not found'
            });
            return;
        }

        res.json(career);
    } catch (error) {
        res.sendStatus(500);
    }
});

/** crear */
router.post('/', validateBody, async (req, res) => {
    try {
        const newCareer = await create(req.body);
        res.json(newCareer);
    } catch (error) {
        res.sendStatus(500);
    } 
});

/**actualiza todo el recurso por id */
router.put('/:id', validateById, validateBody, async (req, res) => {
    try {
        await updateById(req.params.id, req.body);
    
        res.json('Ok');
    } catch (error) {
        res.sendStatus(500);
    }
});

/**borra por id */
router.delete('/:id', validateById, async (req, res) => {
    try {
        await deleteById(req.params.id);
    
        res.json('Ok');
    } catch (error) {
        res.sendStatus(500);
    }
});

module.exports = router;
