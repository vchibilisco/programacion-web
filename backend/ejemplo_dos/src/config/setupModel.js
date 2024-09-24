const { getSeqInstance } = require('./setupDb');
const { Careers } = require('../model/careers');

const setupModel = async () => {
    const instanceDb = await getSeqInstance();
    Careers.init(instanceDb);
};

setupModel()
