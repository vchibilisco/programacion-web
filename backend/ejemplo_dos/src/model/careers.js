const { DataTypes, Model, where } = require("sequelize");

class Careers extends Model {
  static init = (sequelize) => {
    super.init(
      {
        id: {
            type: DataTypes,
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
      }, // attributes
      {
        sequelize,
        modelName: 'careers'
      }
    );

    return this;
  };

  static getAll = async () => {
    return await this.findAll({
      where: {
        deleted: 0
      },
      attributes: {
        exclude: 'deleted, createdAt, updatedAt'
      }
    });
  };
};

module.exports = {
    Careers
};
