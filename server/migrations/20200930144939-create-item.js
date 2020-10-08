module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Items', {
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
          key: 'id'
        }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Category',
          key: 'id'
        }
      },
      removalId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Removal',
          key: 'id'
        }
      },
      nameItem: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      startDateAuction: {
        type: Sequelize.DATE
      },
      endDateAuction: {
        type: Sequelize.DATE
      },
      startingPrice: {
        type: Sequelize.INTEGER
      },
      sellPrice: {
        type: Sequelize.INTEGER
      },
      statePrice: {
        type: Sequelize.TINYINT
      },
      userId: {
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
    await queryInterface.dropTable('Items');
  }
};