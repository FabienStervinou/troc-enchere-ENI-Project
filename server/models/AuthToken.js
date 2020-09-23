module.exports = (sequelize, Sequelize) => {
  const AuthToken = sequelize.define("authtoken", {
    token: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  }, {});

  //set up association 
  AuthToken.associate = function ({ Utilisateur }) {
    AuthToken.belongsTo(Utilisateur);
  }

  //generate a random token
  AuthToken.generate = async function (userId) {
  if (!userId) {
    throw new Error('AuthToken require user ID')
  }
    
  let token = '';
  const validCharacters = 'AZERTYUIOPQSDFGHJKLMWXCVBN' + 'azertyuiopqsdfghjklmwxcvbn' + '1234567890';

  for (var i = 0; i < 15; i++) {
    token += validCharacters.charAt(
      Math.floor(Math.random() * validCharacters.length)
    );
  }
  
  return AuthToken.create({ token, userId })
}

  return AuthToken;
};
