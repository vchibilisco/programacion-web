const { Model, DataTypes } = require('sequelize');

class Levels extends Model {
    static init = sequelize => {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            deleted: {
                type: DataTypes.TINYINT,
                values: [0, 1],
                defaultValue: 0
            }
        }, {
            sequelize,
            modelName: 'levels'
        });

        return this;
    };

    static associate = models => {
        this.belongsTo(models.Careers, {
            foreignKey: 'careers_id',
            as: 'career'
        });
    };

    static getAll = async () => {
        return await this.findAll({
            where: {
                deleted: '0'
            },
            attributes: {
                exclude: 'deleted, createdAt, updatedAt'
            }
        });
    };
};

module.exports = Levels;