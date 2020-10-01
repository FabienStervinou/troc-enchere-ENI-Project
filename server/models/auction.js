'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Auction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Auction.belongsTo(models.User);
      Auction.belongsTo(models.Item);
    }
  };
  Auction.init({
    dateAuction: DataTypes.DATE,
    priceAuction: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Auction',
  });
  return Auction;
};