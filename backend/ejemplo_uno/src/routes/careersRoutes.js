const express = require('express');
const { validateBody, validateById } = require('../middleware/carrersMiddleware');
const { findAll, findById, create, remove, update } = require('../services/careersServices');
const { CAREERS_0001 } = require('../helper/errors');

const router = express.Router();

//** Definimos todas las rutas */
/**obtener todos */
router.get('/', (req, res) => {
    const careers = findAll();
    res.json(careers);
});

/**obtener por id */
router.get('/:id', validateById, (req, res) => {
    const career = findById(req.params.id);

    if (!career) {
        res.status(404).json(CAREERS_0001);
        return;
    }

    res.json(career);
});

/** crear */
router.post('/', validateBody, (req, res) => {
    const newCareer = create(req.body);
    res.json(newCareer);
});

/**actualiza todo el recurso por id */
router.put('/:id', validateById, validateBody, (req, res) => {
    const careerUpdated = update(req.params.id, req.body);
    res.json(careerUpdated);
});

/**borra por id */
router.delete('/:id', validateById, (req, res) => {
    remove(req.params.id);
    res.json('Ok');
});

module.exports = router;
