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

  let Forum = sequelize.define("Forum", {
    title: {
      type: DataTypes.STRING,
      notNull: true,
      validate: {
        len: [1, 100],
        notEmpty: true
      }
    },
    author: {
      type: DataTypes.STRING,
      notNull: true,
      validate: {
        len: [1, 50],
        notEmpty: true
      }
    },
    body: {
      type: DataTypes.STRING,
      notNull: true,
      validate: {
        len: [1, 500],
        notEmpty: true
      }
    }
  });
  return Forum;

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
