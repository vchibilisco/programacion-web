const express = require('express');

const { findAll, create, findById } = require('../services/careersServices');

const router = express.Router();

const validateBody = (req, res, next) => {
    if (!req.body.name) {
        res.status(400).json({
            message: 'name field is required.'
        });

        return;
    }

    next();
};

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
router.get('/:id', async (req, res) => {
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
router.post('/', validateBody, (req, res) => {
    const newCareer = create(req.body);
    res.json(newCareer);
});

/**actualiza todo el recurso por id */
router.put('/:id', (req, res) => {
    res.json('actualiza todo el recurso basado id');
});

/**borra por id */
router.delete('/:id', (req, res) => {
    res.json('borra basado id');
});

module.exports = router;
