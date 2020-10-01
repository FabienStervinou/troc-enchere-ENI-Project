'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Item.belongsTo(models.User);
      Item.hasMany(models.Auction);
      Item.belongsTo(models.Category);
      Item.hasOne(models.Removal);
    }
  };
  Item.init({
    nameItem: DataTypes.STRING,
    description: DataTypes.STRING,
    startDateAuction: DataTypes.DATE,
    endDateAuction: DataTypes.DATE,
    startingPrice: DataTypes.INTEGER,
    sellPrice: DataTypes.INTEGER,
    statePrice: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};