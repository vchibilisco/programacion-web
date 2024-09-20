const express = require('express');

const { findAll, create } = require('../services/careersServices');

const router = express.Router();

const validateBody = (req, res, next) => {
    if (!req.body.name) {
        res.status(400).json({
            message: 'name field is required.'
        });

        return;
    }

    if (typeof req.body.accredited !== 'boolean') {
        res.status(400).json({
            message: 'accredited should be true or false.'
        });

        return;
    }

    next();
};

//** Definimos todas las rutas */
/**obtener todos */
router.get('/', (req, res) => {
    const careers = findAll();
    res.json(careers);
});

/**obtener por id */
router.get('/:id', (req, res) => {
    res.json('Buscar basado id');
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
