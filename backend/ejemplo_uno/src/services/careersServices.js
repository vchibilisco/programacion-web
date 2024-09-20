let careers = [];

const findAll = () => {
    return careers;
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
