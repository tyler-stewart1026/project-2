module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 100]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 100]
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 100]
      }
    },
    ability: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 100]
      }
    },
    zipcode: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 100]
      }
    }
    // foreignKey: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    //   validate: {
    //     len: [1, 100]
    //   }
    // }

  })
  return Users;
}