let careers = [
    {
      "id": 1,
      "name": "Ingenieria en sistemas",
      "accredited": true,
      "deleted": true
    },
    {
      "id": 2,
      "name": "Medicina",
      "accredited": true,
      "deleted": false
    }
  ];

const findAll = () => {
    return careers
        .filter(item => !item.deleted)
        .map(item => ({
            name: item.name,
            accredited: item.accredited
        }));
};

const findById = (id) => {
    const career = careers
        .filter(item => !item.deleted)
        .find(item => item.id === id);

    // if (career.deleted) {
    //     return null;
    // }

    return  career ? {
        id: career.id,
        name: career.name
    } : null;
};

const create = (career) => {
    const newCareer = {
        id: careers.length + 1,
        name: career.name,
        accredited: career.accredited,
        deleted: false
    };

    careers.push(newCareer);

    return newCareer;
};

const remove = (id) => {
    const arrayMapOfIdCareer = careers.map(item => item.id);
    const index = arrayMapOfIdCareer.indexOf(id);

    let careerToDelete = careers.find(item => item.id === id);

    careerToDelete.deleted = true;

    careers.splice(index, 1, careerToDelete);
};

const update = (id, body) => {
    const arrayMapOfIdCareer = careers.map(item => item.id);
    const index = arrayMapOfIdCareer.indexOf(id);


    const careerToUpdate = careers.find(item => item.id === id); //  item.id (2) ===  2

    const newCareer = {
        ...careerToUpdate,
        name: body.name,
        accredited: body.accredited
    };

    /*
    newCareer = {
        id: careerToUpdate.id,
        name: body.name,
        accredited: body.accredited,
        deleted: false
    };

    newCareer = {
        ...careerToUpdate,
        ...body
    }
    
    */

    careers.splice(index, 1, newCareer);

    return newCareer;
};

module.exports = {
    findAll,
    findById,
    create,
    remove,
    update
};
