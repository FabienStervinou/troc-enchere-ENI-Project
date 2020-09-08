module.exports = (sequelize, Sequelize) => {
  const Utilisateurs = sequelize.define("utilisateurs", {
    no_utilisateur: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      validate: {
        is: ["[0-9]", "i"],
      }
    },
    pseudo: {
      type: Sequelize.STRING(30),
    },
    nom: {
      type: Sequelize.STRING(30),
    },
    prenom: {
      type: Sequelize.STRING(30),
    },
    email: {
      type: Sequelize.STRING(20),
      validate: {
        isEmail: true,
      }
    },
    telephone: {
      type: Sequelize.INTEGER(15),
      allowNull: true,
    },
    rue: {
      type: Sequelize.STRING(30)
    },
    code_postal: {
      type: Sequelize.STRING(10)
    },
    ville: {
      type: Sequelize.STRING(30)
    },
    mot_de_passe: {
      type: Sequelize.STRING(30)
    },
    credit: {
      type: Sequelize.INTEGER
    },
    administrateur: {
      type: Sequelize.BOOLEAN
    }
  });

  return Tutorial;
};