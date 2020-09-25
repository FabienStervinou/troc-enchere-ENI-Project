var jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = '9Bn6FogYfSSBNL47mG6ES7qCtPtHayjPRzMRkRKETDobfLECHYfCFsaJMQNGDkzdiXCS7YfjnGGQEkyX';

// Exported functions 
module.exports = {
  generateTokenForUser: function(userData) {
    return jwt.sign({
      userId: userData.id,
      isAdmin: userData.isAdmin
    },
      JWT_SIGN_SECRET,
      {
      expiresIn: '1h'
    })
  }
}