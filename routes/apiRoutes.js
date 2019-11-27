var db = require("../models");

module.exports = function(app) {
  app.get("/api/user", function(req, res) {
    db.Users.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/user", function(req, res) {
    db.Users.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      ability: req.body.ability,
      zipcode: req.body.zipcode
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  app.put("/api/user/:id", function(req, res) {
    db.User.update({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.delete("/api/user/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Forum Routes=======================================
  app.get("/api/forums", function(req, res) {
    db.Forum.findAll({}).then(function(dbForum) {
      res.json(dbForum);
    });
  });

  // Get route for returning posts of a specific category
  app.get("/api/forums/category/:category", function(req, res) {
    db.Forum.findAll({
      where: {
        category: req.params.category
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/forums/:id", function(req, res) {
    db.Forum.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbForum) {
      res.json(dbForum);
    });
  });

  // POST route for saving a new post
  app.post("/api/forums", function(req, res) {
    console.log(req.body);
    db.Forum.create({
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      body: req.body.body
    }).then(function(dbForum) {
      res.json(dbForum);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/forums/:id", function(req, res) {
    db.Forum.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbForum) {
      res.json(dbForum);
    });
  });

  // PUT route for updating posts
  app.put("/api/forums", function(req, res) {
    db.Forum.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbForum) {
      res.json(dbForum);
    });
  });

  // Routes Trails API
  app.get("/api/trails", function(req, res) {
    db.Trails.findAll({}).then(function(trailsResults) {
      res.json(trailsResults);
    });
  });
  app.get("/api/trails", function(req, res) {
    db.Trails.findOne({
      where: {
        trailsId: req.body.trailId
      }
    }).then(function(trailsResults) {
      res.json(trailsResults);
    });
  });
  app.get("/api/trails", function(req, res) {
    db.Trails.findOne({
      where: {
        rating: req.body.rating
      }
    }).then(function(trailsResults) {
      res.json(trailsResults);
    });
  });
  app.get("/api/trails", function(req, res) {
    db.Trails.findOne({
      where: {
        length: req.body.trailLength
      }
    }).then(function(trailsResults) {
      res.json(trailsResults);
    });
  });
};
