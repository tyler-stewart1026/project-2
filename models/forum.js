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


  return Forum;
};
