var db = require("../models");
var axios = require("axios");
require("dotenv").config();

var lat;
var lng;
var trailName = [];

module.exports = function(app) {
  app.get("/api/user", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/user", function(req, res) {
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      zipcode: req.body.zipcode,
      ability: req.body.ability,
      type: req.body.type,
      powderhound: req.body.powderhound
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
    })
      .then(function(dbForum) {
        res.json(dbForum);
      })
      .catch(function(error) {
        if (error) {
          console.log("Something went wrong: " + error);
        }
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
    var tempObj = {
      title: req.body.title,
      author: req.body.author,
      body: req.body.body
    };
    db.Forum.update(tempObj, {
      where: {
        id: req.body.id
      }
    }).then(function(dbForum) {
      res.json(dbForum);
    });
  });

  // Route for getting lat/long by city===================
  app.get("/api/cities/:location", function(req, res) {
    var responseTempObj = {}
    console.log("working");
    var queryUrl =
      "http://www.mapquestapi.com/geocoding/v1/address?key=" +
      process.env.MAPKEY +
      "&location=" +
      req.params.location;
    axios.get(queryUrl).then(function({data: {results}}) {
      if (results.length === 0) return {};
      const [firstResult] = results;
      const { locations } = firstResult;
      if (locations.length === 0) return {};
      const [firstLocation] = locations;
      const { latLng } = firstLocation;
      // console.log("This is our lat: " + latLng.lat)
      var lat = latLng.lat;
      console.log(lat);
      var lng = latLng.lng;
      console.log(lng);
      // console.log("This is our lon: " + latLng.lng)
      responseTempObj.latLng = latLng
      var queryUrlMaps =
        "https://www.powderproject.com/data/get-trails?lat=" +
        lat +
        "&lon=" +
        lng +
        "&key=" +
        process.env.POWDERKEY;
      return axios
        .get(queryUrlMaps)
        .then(function({ data }) {
          console.log(queryUrlMaps + "query URL");
          for (var i = 0; i < data.trails.length; i++) {
            console.log("response: " + data.trails[i].name);

            trailName.push(data.trails[i].name);
            // console.log("This is the trialName: " + trailName);
          }
          responseTempObj.trails = data.trails;
          res.json(responseTempObj)
        })
        .catch(function(error) {
          if (error.response) {
            console.log("Something went wrong: " + error);
          }
        });
    });
  });

  // app.get("/api/test", function (req, res) {
  //   console.log(placeSearch);
  // });

  // Routes Trails API====================================
  app.get("/api/trails", function(req, res) {
    db.Trails.findAll({}).then(function(trailsResults) {
      res.json(trailsResults);
    });
  });
  // app.get("/api/trails", function(req, res) {
  //   db.Trails.findAll({
  //     where: {
  //       length: req.body.trailLength
  //     }
  //   }).then(function(trailsResults) {
  //     res.json(trailsResults);
  //   });
};
