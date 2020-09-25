// Imports
const bcrypt = require('bcrypt');
const jwtUtils = require('../utils/jwt.utils'); 
const models = require('../models');
const asyncWaterfall = require('async');

// Regex
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*\d).{4,12}$/;

//Routes
module.exports = {
  register: function(req, res) {
    
    // Params
    var username = req.body.username;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var phone = req.body.phone;
    var street = req.body.street;
    var postalCode = req.body.postalCode;
    var city = req.body.city;
    var password = req.body.password;
    var credit = req.body.credit;
    var isAdmin = req.body.isAdmin;

    if (username == null || email == null || password == null) {
      return res.status(400).json({ 'error': 'Missing parameters' });
    }

    if (username.length >= 13 || username.length <= 4) {
      return res.status(400).json({
        'error': 'wrong username (must be length 5 - 12)'
      });
    }

    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({
        'error': 'email is not valid'
      });
    }

    if (!PASSWORD_REGEX.test(password)) {
      return res.status(400).json({
        'error': 'password invalid (must length 4 - 12 and include 1 number at least)'
      });
    }

    models.User.findOne({
      attributes: ['email'],
      where: { email: email }
    })
      .then(function(userFound) {
        if (!userFound) {

          bcrypt.hash(password, 5, function (err, bcryptedPassword) {
            var newUser = models.User.create({
              username: username,
              firstname: firstname,
              lastname: lastname,
              email: email,
              phone: phone,
              street: street,
              postalCode: postalCode,
              city: city,
              password: bcryptedPassword,
              credit: credit,
              isAdmin: 0
            })
              .then(function (newUser) {
                return res.status(201).json({
                  'userId': newUser.id
                })
              })
              .catch(function (err) {
                return res.status(500).json({ 'error': 'Cannot add user' + err }); 
              });
          });

        } else {
          return res.status(409).json({ 'error': 'User already exist' });
        }
      })
      .catch(function(err) {
        return res.status(500).json({ 'error': 'Unable to verify user' + err });
      });

  },
  login: function(req, res) {

    // Params
    var email = req.body.email;
    var password = req.body.password;

    if (email == null || password == null) {
      return res.status(400).json({ 'error': 'emaail or password is empty' });
    }
    //TODO verify email regex and password lenght force

    models.User.findOne({
      where: { email: email }
    })
      .then(function (userFound) {
        if (userFound) {

          bcrypt.compare(password, userFound.password, function (errBcrypt, resBcrypt) {
            if (resBcrypt) {
              return res.status(200).json({
                'userId': userFound.id,
                'token': jwtUtils.generateTokenForUser(userFound)
              });
            } else {
              return res.status(403).json({ 'error': 'Invalid Password' });
            }
          });

        } else {
          return res.status(404).json({ 'error': 'user not exist on DB' });
        }
      })
      .catch(function (err) {
        return res.status(500).json({ 'error': 'unable to verify user' });
      });
  }
}
