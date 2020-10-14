'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
const bcryptUtils = require('../utils/bcrypt.utils'); 

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

sequelize.sync({
  force: true
})
  //Generate fake User and Items
  .then(function () {
    var password = process.env.USER_TEST_PASSWORD;
    var passEncrypt = bcryptUtils.generateHashPassword(password);

    sequelize.models.User.create({
      username: 'tester',
      email: 'test@test.com',
      password: passEncrypt,
    })
    //Retrieve Fake User informations generated
    .then(function (insertedFakeUser) {
      var id = insertedFakeUser.dataValues.id

      //Generate fake Items with fake User id
      sequelize.models.Item.create({
        userId: id,
        nameItem: 'ItemTest',
        description: 'An awesome object',
        startDateAuction: new Date(2020, 8, 22),
        endDateAuction: new Date(2020, 8, 20),
        startingPrice: 100,
        sellPrice: 100,
        StatePrice: 1,
      });
      sequelize.models.Item.create({
        userId: id,
        nameItem: 'ItemTest 2',
        description: 'An awesome object 2',
        startDateAuction: new Date(2020, 8, 22),
        endDateAuction: new Date(2020, 8, 20),
        startingPrice: 100,
        sellPrice: 100,
        StatePrice: 1,
      });
      sequelize.models.Item.create({
        userId: id,
        nameItem: 'ItemTest 3',
        description: 'An awesome object 3',
        startDateAuction: new Date(2020, 8, 22),
        endDateAuction: new Date(2020, 8, 20),
        startingPrice: 100,
        sellPrice: 100,
        StatePrice: 1,
      });
      sequelize.models.Item.create({
        userId: id,
        nameItem: 'ItemTest 3',
        description: 'An awesome object 3',
        startDateAuction: new Date(2020, 8, 22),
        endDateAuction: new Date(2020, 8, 20),
        startingPrice: 100,
        sellPrice: 100,
        StatePrice: 1,
      });
    })
  });

module.exports = db;
