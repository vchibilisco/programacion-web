const { Careers } = require('../model/careers');

let careers = [];

const findAll = async () => {
    try {
        const careers = await Careers.getAll();
        return careers;
    } catch (error) {
        console.error('careersServices: ' + error);
        throw error;
    }
};

const create = (career) => {
    const newCareer = {
        id: careers.length + 1,
        name: career.name,
        accredited: career.accredited
    };

    careers.push(newCareer);

    return newCareer;
};

module.exports = {
    findAll,
    create
};
