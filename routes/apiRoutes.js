var db = require("../models");
var axios = require("axios");
require("dotenv").config();

module.exports = function (app) {
  app.get("/api/user", function (req, res) {
    db.User.findAll({}).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/user", function (req, res) {
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      ability: req.body.ability,
      zipcode: req.body.zipcode
    }).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });

  app.put("/api/user/:id", function (req, res) {
    db.User.update({
      where: {
        id: req.params.id
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  app.delete("/api/user/:id", function (req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // Forum Routes=======================================
  app.get("/api/forums", function (req, res) {
    db.Forum.findAll({}).then(function (dbForum) {
      res.json(dbForum);
    });
  });

  // Get route for returning posts of a specific category
  app.get("/api/forums/category/:category", function (req, res) {
    db.Forum.findAll({
      where: {
        category: req.params.category
      }
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/forums/:id", function (req, res) {
    db.Forum.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbForum) {
      res.json(dbForum);
    });
  });

  // POST route for saving a new post
  app.post("/api/forums", function (req, res) {
    console.log(req.body);
    db.Forum.create({
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      body: req.body.body
    }).then(function (dbForum) {
      res.json(dbForum);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/forums/:id", function (req, res) {
    db.Forum.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbForum) {
      res.json(dbForum);
    });
  });

  // PUT route for updating posts
  app.put("/api/forums", function (req, res) {
    var tempObj = {
      title: req.body.title,
      author: req.body.author,
      body: req.body.body
    };
    db.Forum.update(tempObj, {
      where: {
        id: req.body.id
      }
    }).then(function (dbForum) {
      res.json(dbForum);
    });
  });

  // Routes Trails API
  app.get("/api/trails", function (req, res) {
    var queryUrl = "https://www.powderproject.com/data/key=" + process.env.POWDERKEY + "&get-trails?lat=40.027&lon=-105.251"
    axios.get(queryUrl).then(function (response) {
      console.log(response);
      db.Trails.findAll({}).then(function (trailsResults) {
        res.json(trailsResults);
      });
    })
  });

  app.get("/api/trails", function (req, res) {
    db.Trails.findAll({
      where: {
        rating: req.body.rating
      }
    }).then(function (trailsResults) {
      res.json(trailsResults);
    });
  });
  app.get("/api/trails", function (req, res) {
    db.Trails.findAll({
      where: {
        length: req.body.trailLength
      }
    }).then(function (trailsResults) {
      res.json(trailsResults);
    });
  });
};
