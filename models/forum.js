module.exports = function (sequelize, DataTypes) {
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
      // category: {
      //   type: DataTypes.STRING,
      //   notNull: true,
      //   validate: {
      //     len: [1, 50],
      //   },
      //   defaultValue: "Skiing"
      // },
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
  }