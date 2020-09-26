// Imports
const express = require('express');
const usersCtrl = require('./routes/usersController');

// Router
exports.router = (function () {
  var apiRouter = express.Router();

  // Users routes
  apiRouter.route('/users/register/').post(usersCtrl.register);
  apiRouter.route('/users/login/').post(usersCtrl.login);
  apiRouter.route('/users/profile/').get(usersCtrl.getUserProfile);
  apiRouter.route('/users/profile/').put(usersCtrl.updateUserProfil);

  return apiRouter;
})();