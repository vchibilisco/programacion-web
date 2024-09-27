const { CAREERS_0004, CAREERS_0005, CAREERS_0003, CAREERS_0002 } = require("../helper/errors");

const careerFields = ['name', 'accredited'];

// POST / PUT
const validateBody = (req, res, next) => {
    if (!req.body.name) {
        res.status(400).json(CAREERS_0004);

        return;
    }

    if (typeof req.body.accredited !== 'boolean') {
        res.status(400).json(CAREERS_0005);

        return;
    }

    if (!Object.keys(req.body).every(bodyKey => careerFields.includes(bodyKey))) {
        res.status(400).json(CAREERS_0003);

        return;
    }

    next();
};

// GET BY ID / DELETE / PUT
const validateById = (req, res, next) => {
    
    if (isNaN(Number(req.params.id))) {
        res.status(400).json(CAREERS_0002);
        return;
    }

    req.params.id = Number(req.params.id);

    next();
};

module.exports = {
    validateBody,
    validateById
};
