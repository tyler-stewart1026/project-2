var db = require("../models");

module.exports = function(app) {
  // forum route loads forum.handlebars
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/forum", function(req, res) {
    db.Forum.findAll({}).then(function(dbForum) {
      var hbsObject = {
        forum: dbForum
      };
      console.log(hbsObject);
      res.render("forum", hbsObject);
    });
  });

  app.get("/user", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      var hbsObject = {
        users: dbUser
      };
      console.log(hbsObject);
      res.render("users", hbsObject);
    });
  });

  app.get("/user/:id", function(req, res) {
    db.User.findOne({
      where: { id: req.params.id}
    }).then(function(dbUser) {
      //console.log('dbUser', dbUser);
      var hbsObject = {
        user: dbUser
      };
      console.log(hbsObject);
      res.render("user", hbsObject);
    });
  });

  app.get("/create-user", function(req, res) {
      res.render("create-user");
    });

  app.get("/trails", function(req, res) {
    db.Trails.findAll({}).then(function(dbTrails) {
      var hbsObject = {
        trails: dbTrails
      };
      console.log(hbsObject);
      res.render("trails", hbsObject);
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
