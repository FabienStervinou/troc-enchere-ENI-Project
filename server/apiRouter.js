// Imports
const express = require('express');
const usersCtrl = require('./routes/usersController');
const itemCtrl = require('./routes/itemsController');

// Router
exports.router = (function () {
  var apiRouter = express.Router();

  // Users routes
  apiRouter.route('/users/register/').post(usersCtrl.register);
  apiRouter.route('/users/login/').post(usersCtrl.login);
  apiRouter.route('/users/logout/').post(usersCtrl.logout);
  apiRouter.route('/users/profile/').get(usersCtrl.getUserProfile);
  apiRouter.route('/users/profile/').put(usersCtrl.updateUserProfil);

  // Items routes
  apiRouter.route('/item/').post(itemCtrl.createItem);
  apiRouter.route('/item/:userId/').get(itemCtrl.findItemByUserId);

  return apiRouter;
})();