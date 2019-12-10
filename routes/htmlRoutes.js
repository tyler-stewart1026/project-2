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
    db.Trails.findAll({}).then(function() {
      var hbsObject = {
        trailName: "Tyler trail",
        trailLength: "0.5",
        trailDiff: "Black Diamond",
        trailLocation: "Aspen, Colorado",
        rating: "3",
        trailPic:
          "https://cdn.pixabay.com/photo/2017/02/14/03/03/ama-dablam-2064522_960_720.jpg",
        trailDesc:
          "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters."
      };
      res.render("index", hbsObject);
    });
  });
};
