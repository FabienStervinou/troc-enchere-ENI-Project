module.exports = app => {
  const utilisateurs = require("../controllers/utilisateur.controller.js");

  var router = require("express").Router();

  // Create a new Utilisateur
  router.post("/", utilisateurs.create);

  // Retrieve a single Utilisateur with id
  router.get("/:userId", utilisateurs.findOne);

  // Update a Utilisateur with id
  router.put("/:userId", utilisateurs.update);

  // Delete a Utilisateur with id
  router.delete("/:userId", utilisateurs.delete);

  app.use('/api/utilisateurs', router);
};