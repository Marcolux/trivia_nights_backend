'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.event.belongsToMany(models.user, { through: 'user_event' })
    }
  };
  event.init({
    name: DataTypes.STRING,
    venue: DataTypes.STRING,
    theme: DataTypes.STRING,
    date: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    event_details: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'event',
  });
  return event;
};