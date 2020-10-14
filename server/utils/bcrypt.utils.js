var bcrypt = require('bcrypt')

module.exports = {
  generateHashPassword: password => 
    bcrypt.hashSync(password, 5)
}