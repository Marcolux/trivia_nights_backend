'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user.belongsToMany(models.event, { through: 'user_event' })
    }
  };
  user.init({
    name: {
      type : DataTypes.STRING,
      allowNull:false
    },
    email: {
      type :DataTypes.STRING,
      unique: true,
      allowNull:false
    },
    signup_date: DataTypes.STRING,
    interest: DataTypes.STRING,
    location: DataTypes.STRING,
    password:DataTypes.STRING,
    music:DataTypes.BOOLEAN,
    film:DataTypes.BOOLEAN,
    sports:DataTypes.BOOLEAN,
    general:DataTypes.BOOLEAN,
    popCulture:DataTypes.BOOLEAN,
    history:DataTypes.BOOLEAN,
    science:DataTypes.BOOLEAN,
    currentEvents:DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};