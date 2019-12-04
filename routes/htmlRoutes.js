var db = require("../models");

module.exports = function(app) {
  // forum route loads forum.handlebars
  app.get("/", function(req, res) {
    db.Forum.findAll({}).then(function(dbForum) {
      var hbsObject = {
        forum: dbForum
      };
      console.log(hbsObject);
      res.render("forum", hbsObject);
    });
  });

  app.get("/user/:id", function(req, res) {
    db.User.findOne({
      where: { id: req.params.id}
    }).then(function(dbUser) {
      var hbsObject = {
        user: dbUser
      };
      console.log(hbsObject);
      res.render("user", hbsObject);
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
