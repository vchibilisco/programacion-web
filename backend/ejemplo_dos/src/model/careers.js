const { DataTypes, Model } = require("sequelize");
const Levels = require("./levels");

class Careers extends Model {
  static init = (sequelize) => {
    super.init(
      {
        id: {
            type: DataTypes.NUMBER,
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
        modelName: 'careers',
      }
    );

    return this;
  };

  static associate = models => {
    this.hasMany(models.Levels, {
      foreignKey: 'careers_id',
      as: 'levels'
    });
  };

  static getAll = async () => {
    return await this.findAll({
      where: {
        deleted: 0
      },
      attributes: {
        exclude: 'deleted, createdAt, updatedAt'
      },
      include: {
        model: Levels,
        as: 'levels',
        attributes: {
          exclude: 'careers_id, deleted, createdAt, updatedAt'
        }
      }
    });
  };

  static getById = async (id) => {
    return await this.findByPk(id, {
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
