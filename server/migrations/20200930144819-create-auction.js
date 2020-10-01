module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Auctions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id',
        }
      },
      itemId: {
        type: Sequelize.INTEGER,
          allowNull: false,
        references: {
          model: 'Item',
          key: 'id',
        }
      },
      dateAuction: {
        type: Sequelize.DATE
      },
      priceAuction: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Auctions');
  }
};