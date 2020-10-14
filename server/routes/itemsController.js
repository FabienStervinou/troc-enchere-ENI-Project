const models = require('../models');

module.exports = {
  findItemByUserId: async function (req, res) {
    var userIdParam = req.params.userId;

    models.User.findAll({
      where: {
        id: userIdParam
      }
    }).then(userfound => {
      if (!userfound ) {
        return res.status(500).json({
          'error': 'No user for this id'
        });
      } else {
        const userId = userIdParam
        models.Item.findAll({
          where: {
            userId
          }
        }).then(itemsfound => {
          if (itemsfound.lenght <= 0) {
            return res.send('No item for this user')
          } else {
            return res.status(200).json({
            itemsfound
          })
          }
        }).catch(err => {
          return res.status(500).json({
            'error': 'Internal server error', err
          })
        })
      }
    }).catch(err => {
      return res.send(err)
    });
  },
  createItem: async function (req, res) {
    
    var userId = req.body.userId;
    var nameItem = req.body.nameItem;
    var description = req.body.description;
    var startDateAuction = req.body.startDateAuction;
    var endDateAuction = req.body.endDateAuction;
    var startingPrice = req.body.startingPrice;
    var sellPrice = req.body.startingPrice;
    var statePrice = req.body.statePrice;

    if (nameItem == null || startDateAuction == null || endDateAuction == null ||
      startingPrice == null || sellPrice == null || statePrice == null) {
      res.status(400).json({ 'error': 'Some information empty' });
    }

    if (description.lenght < 10) {
      res.status(400).json({ 'error': 'Your description is to short, 10 caracteres required' });
    }

    models.User.findAll({
      where: {
        id: userId
      }
    })
      .then(function (userfound) {
        if (userfound) {

          const newItem = models.Item.create({
            nameItem,
            description,
            startDateAuction,
            endDateAuction,
            startingPrice,
            sellPrice,
            statePrice: 0,
            userId,
          })
            .then(function (newItem) {
              return res.status(200).json({
                newItem
              })
            })
            .catch(function (err) {
              return res.status(401).json({
                'error': 'Cannot create item ', err
            })
          })
        } else {
          return res.status(500).json({ 'error': 'Unable to find user' });
        }
      }).catch(function (err) {
        return res.status(500).json({ 'error': 'Cannot find user', err})
    });
  },
  findRecentItems: function (req, res) {
    models.Item.findAll({
      limit: 10
    })
      .then(function (itemsFound) {
        if (itemsFound) {
          res.status(200).json({
            itemsFound
          })
        }
        else {
          return res.status(500).json({ 'Error': 'Internal server error',err })
        }
      })
      .catch(function (err) {
        return res.status(500).json({
          'Error' : 'No items found ', err
        })
      })
  },
}