module.exports = function(sequelize, DataTypes) {
  // Define Trails Variable for API routes.
  var Trails = sequelize.define("Trails", {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 100]
      }
    },
    difficulty: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 100]
      }
    },
    length: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      validate: {
        len: [1, 100]
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        len: [1, 100]
      }
    }
  });
  return Trails;
};
