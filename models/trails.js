module.exports = function(sequelize, DataTypes) {
  // Define Trails Variable for API routes.
  var Trails = sequelize.define("Trails", {
    trailId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 100]
      }
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    latLong: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    length: {
      type: DataTypes.INTEGER,
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
