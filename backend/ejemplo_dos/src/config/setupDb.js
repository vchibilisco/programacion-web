const { Sequelize } = require('sequelize');

let seqInstance = null;

// Lo correcto es que nombre de base de datos, usuario, contraseña, host y dialect
// deben estar configurados en un archivo .env, y encriptado

const createInstance = async () => {
    const instance = new Sequelize(
        'base de datos', // nombre de base de datos
        'usuario', // usuario
        'contrasenia', // contraseña
        {
            host: 'dominio/ip',
            dialect: 'mysql',
            pool: {
                max: 3
            }
        }
    );

    try {
        await instance.authenticate();
        console.log('Connection has been established successfully.');
        return instance;
    } catch (error) {
        throw new Error('Unable to connecto to database');
    }
};

const getSeqInstance = async () => {
    if (!seqInstance) {
        seqInstance = await createInstance();
    }

    return seqInstance;
};

module.exports = {
    getSeqInstance
};
