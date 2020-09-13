const db = require("../models");
const Utilisateur = db.utilisateurs;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.pseudo) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Utilisateur
  const utilisateur = {
    userId: req.body.userId,
    pseudo: req.body.pseudo,
    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email,
    telephone: req.body.telephone,
    rue: req.body.rue,
    code_postal: req.body.code_postal,
    ville: req.body.ville,
    mot_de_passe: req.body.mot_de_passe,
    credit: req.body.credit,
    administrateur: req.body.administrateur,
  };

  // Save Utilisateur in the database
  Utilisateur.create(utilisateur)
    .then((data) => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Utilisateur."
      });
    });
};

exports.findOne = (req, res) => {
  const userId = req.params.userId;

  Utilisateur.findByPk(userId)
    .then((data) => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error with the utilisateur id=" + userId
      });
    });
};

exports.update = (req, res) => {
  const userId = req.params.userId;

  Utilisateur.update(req.body, {
      where: {
        userId,
      },
    })
    .then(num => {
      if (num == true) {
        res.send({
          message: "Utilisateur was update succcesfully",
        });
      } else {
        res.send({
          message: `Cannot update utilisateur with the id: ${id}. Maybe req.body is empty or Utilisateur was not found.`,
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating utilisateur with the id= ${id}`,
      });
    });
};

exports.delete = (req, res) => {
  const userId = req.params.userId;

  Utilisateur.destroy({
      where: {
        userId,
      },
    })
    .then(num => {
      if (num == true) {
        res.send({
          message: "Utilisateur was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Utilisateur with id=${userId}. Maybe Utilisateur was not found!`,
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Utilisateur with id=" + userId,
      });
    });
};