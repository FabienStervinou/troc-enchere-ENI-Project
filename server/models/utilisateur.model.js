const bcrypt = require('bcrypt');

module.exports = (sequelize, Sequelize) => {
  const Utilisateur = sequelize.define("utilisateur", {
    userId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false,
      validate: {
        is: ["[0-9]", "i"],
      }
    },
    pseudo: {
      type: Sequelize.STRING(30),
    },
    nom: {
      type: Sequelize.STRING(30),
      allowNull: true,
    },  
    prenom: {
      type: Sequelize.STRING(30),
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING(20),
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    telephone: {
      type: Sequelize.INTEGER(15),
      allowNull: true,
    },
    rue: {
      type: Sequelize.STRING(30),
      allowNull: true,
    },
    code_postal: {
      type: Sequelize.INTEGER(10),
      allowNull: true,
    },
    ville: {
      type: Sequelize.STRING(30),
      allowNull: true,
    },
    password: {
      type: Sequelize.STRING,
    },
    credit: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    administrateur: {
      type: Sequelize.TINYINT,
      defaultValue: 0,
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    }
  }, {
      freezeTableName: true,
      timestamps: false,
  });
  
  Utilisateur.beforeCreate((utilisateur, options) => {

    return bcrypt.hash(utilisateur.password, 10)
      .then(hash => {
        utilisateur.password = hash;
      })
      .catch(err => {
        throw new Error();
      });
  });

  return Utilisateur;
};
