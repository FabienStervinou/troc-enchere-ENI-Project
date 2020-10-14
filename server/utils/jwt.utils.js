var jwt = require('jsonwebtoken');

// Exported functions 
module.exports = {
  generateTokenForUser: function(userData) {
    const JWT_SIGN_SECRET = process.env.SECRET_TOKEN;
    
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