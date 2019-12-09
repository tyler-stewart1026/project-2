var db = require("../models");

module.exports = function (app) {
  // forum route loads forum.handlebars
  // app.get("/", function (req, res) {
  //   res.render("index");
  // });

  app.get("/post", function (req, res) {
    res.render("post");
  });

  app.get("/forum", function (req, res) {
    db.Forum.findAll({}).then(function (dbForum) {
      var hbsObject = {
        forum: dbForum
      };
      console.log(hbsObject);
      res.render("forum", hbsObject);
    });
  });

  app.get("/users-all", function (req, res) {
    db.User.findAll({}).then(function (dbUser) {
      var hbsObject = {
        users: dbUser
      };
      console.log(hbsObject);
      res.render("users-all", hbsObject);
    });
  });

  app.get("/user/:id", function (req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbUser) {
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

  app.get("/", function (req, res) {
    db.Trails.findAll({}).then(function () {
      var hbsObject = {
        trailName: "Tyler trail",
        trailLength: "0.5",
        trailDiff: "Black Diamond",
        trailLocation: "Aspen, Colorado",
        rating: "3",
        trailPic: "https://cdn.pixabay.com/photo/2017/02/14/03/03/ama-dablam-2064522_960_720.jpg",
        trailDesc: "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters."
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  // app.get("/api/cities/:location", function (req, res) {
  //   console.log("working");
  //   var queryUrl =
  //     "http://www.mapquestapi.com/geocoding/v1/address?key=" +
  //     process.env.MAPKEY +
  //     "&location=" +
  //     req.params.location;
  //   axios.get(queryUrl).then(function ({
  //     data: {
  //       results
  //     }
  //   }) {
  //     if (results.length === 0) return {};
  //     const [firstResult] = results;
  //     const {
  //       locations
  //     } = firstResult;
  //     if (locations.length === 0) return {};
  //     const [firstLocation] = locations;
  //     const {
  //       latLng
  //     } = firstLocation;
  //     res.json(latLng);
  //     // console.log("This is our lat: " + latLng.lat)
  //     var lat = latLng.lat;
  //     console.log(lat);
  //     var lng = latLng.lng;
  //     console.log(lng);
  //     // console.log("This is our lon: " + latLng.lng)

  //     var queryUrlMaps =
  //       "https://www.powderproject.com/data/get-trails?lat=" +
  //       lat +
  //       "&lon=" +
  //       lng +
  //       "&key=" +
  //       process.env.POWDERKEY;
  //     return axios
  //       .get(queryUrlMaps)
  //       .then(function ({
  //         data
  //       }) {
  //         console.log(queryUrlMaps + "query URL");
  //         for (var i = 0; i < data.trails.length; i++) {
  //           console.log("response: " + data.trails[i].name);

  //           var trailName = data.trails[i].name;
  //           console.log("This is the trialName: " + trailName);
  //         }
  //         res.render("index", {data: trails});
  //       })
  //       .catch(function (error) {
  //         if (error.response) {
  //           console.log("Something went wrong: " + error);
  //         }
  //       });
  //   });
  // });
  // // Render 404 page for any unmatched routes
  // app.get("*", function (req, res) {
  //   res.render("404");
  // });
};