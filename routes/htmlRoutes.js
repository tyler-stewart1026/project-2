var db = require("../models");

module.exports = function(app) {
  app.get("/post", function(req, res) {
    res.render("post");
  });

  app.get("/forum", function(req, res) {
    db.Forum.findAll({}).then(function(dbForum) {
      var hbsObject = {
        forum: dbForum
      };
      res.render("forum", hbsObject);
    });
  });

  app.get("/users-all", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      var hbsObject = {
        users: dbUser
      };
      res.render("users-all", hbsObject);
    });
  });

  app.get("/user/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      var hbsObject = {
        user: dbUser
      };
      res.render("user", hbsObject);
    });
  });

  app.get("/create-user", function(req, res) {
    res.render("create-user");
  });

  app.get("/", function(req, res) {
      res.render("index");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
