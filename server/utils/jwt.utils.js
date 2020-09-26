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
  },
  parseAuthorization: function (authorization) {
    return (authorization != null) ? authorization.replace('Bearer ', '') : null;
  },
  getUserId: function (authorization) {
    var userId = -666;
    var token = module.exports.parseAuthorization(authorization);
    if (token != null) {
      try {
        var jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
        if (jwtToken != null) {
          userId = jwtToken.userId;
        }
      } catch (error) { }
    }
    return userId;
  }
}