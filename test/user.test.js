var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;
var mocha = require("mocha");
var { describe, beforeEach, it } = mocha;
// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

describe("GET /api/user", function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({
      force: true
    });
  });

  it("should create 2 new users", function(done) {
    // Add some examples to the db to test with
    db.User.bulkCreate([
      {
        id: "2",
        name: "Tyler",
        email: "First email",
        phone: "093-480-9341",
        ability: "yes",
        zipcode: "89012"
      },
      {
        id: "3",
        name: "Tyler again",
        email: "Second Description",
        phone: "093-480-9341",
        ability: "yes",
        zipcode: "89012"
      }
    ]).then(function() {
      // Request the route that returns all examples
      request.get("/api/user").end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an("array")
          .that.has.lengthOf(2);

        expect(responseBody[0])
          .to.be.an("object")
          .that.includes({
            name: "Tyler",
            email: "First email",
            phone: "093-480-9341",
            ability: "yes",
            zipcode: "89012"
          });

        expect(responseBody[1])
          .to.be.an("object")
          .that.includes({
            name: "Tyler again",
            email: "Second Description",
            phone: "093-480-9341",
            ability: "yes",
            zipcode: "89012"
          });

        // The `done` function is used to end any asynchronous tests
        done();
      });
    });
  });
});
