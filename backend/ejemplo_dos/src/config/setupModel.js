const { getSeqInstance } = require('./setupDb');
const { Careers } = require('../model/careers');
const Levels = require('../model/levels');

const setupModel = async () => {
    const instanceDb = await getSeqInstance();
    const careers = Careers.init(instanceDb);
    const levels = Levels.init(instanceDb);

    Careers.associate({ Levels: levels });
    Levels.associate({ Careers: careers });

};

setupModel()
