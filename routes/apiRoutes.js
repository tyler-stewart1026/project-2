var db = require("../models");

module.exports = function (app) {
  // Get all examples
  // app.get("/api/examples", function (req, res) {
  //   db.Example.findAll({}).then(function (dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  // // Create a new example
  // app.post("/api/examples", function (req, res) {
  //   db.Example.create(req.body).then(function (dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function (req, res) {
  //   db.Example.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function (dbExample) {
  //     res.json(dbExample);
  //   });
  // });

































  // Routes Trails API
  app.get("/api/trails", function (req, res) {
    db.trails.findAll({}).then(function (trailsResults) {
      res.json(trailsResults);
    });
  });
  app.get("/api/trails", function (req, res) {
    db.trails.findOne({
      where: {
        trailsId: req.body.trailId
      }
    }).then(function (trailsResults) {
      res.json(trailsResults);
    });
  });
  app.get("/api/trails", function (req, res) {
    db.trails.findOne({
      where: {
        rating: req.body.rating
      }
    }).then(function (trailsResults) {
      res.json(trailsResults);
    });
  });
  app.get("/api/trails", function (req, res) {
    db.trails.findOne({
      where: {
        length: req.body.trailLength
      }
    }).then(function (trailsResults) {
      res.json(trailsResults);
    });
  });
};