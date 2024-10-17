const { Careers } = require('../model/careers');

const findAll = async () => {
    try {
        const careers = await Careers.getAll();
        return careers;
    } catch (error) {
        console.error('careersServices: ' + error);
        throw error;
    }
};

const findById = async (id) => {
    try {
        const career = await Careers.getById(id);

        return career;
    } catch (error) {
        console.error('careersServices: ' + error);
        throw error;
    }
};

const create = async (career) => {
    try {
        const newCareer = await Careers.create({ name: career.name });

        return newCareer;
    } catch (error) {
        console.error('careersServices: ' + error);
        throw error;
    }
};

const updateById = async (id, payload) => {
    try {
        await Careers.updateById(id,  { name: payload.name });
    } catch (error) {
        console.error('careersServices: ' + error);
        throw error;
    }
};

const deleteById = async (id) => {
    try {
        await Careers.deleteById(id);
    } catch (error) {
        console.error('careersServices: ' + error);
        throw error;
    }
};

module.exports = {
    findAll,
    findById,
    create,
    updateById,
    deleteById
};
