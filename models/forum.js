module.exports = function(sequelize, DataTypes) {
  var Forum = sequelize.define("Forum", {
    title: {
      type: DataTypes.STRING,
      notNull: true,
      validate: {
        len: [0, 100],
        notEmpty: true
      }
    },
    body: {
      type: DataTypes.STRING,
      notNull: true,
      validate: {
        len: [0, 500],
        notEmpty: true
      }
    }
  });

  Forum.associate = function(models) {
    // We're saying that a Forum should belong to an User
    // A Forum can't be created without an User due to the foreign key constraint
    Forum.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Forum;
};
