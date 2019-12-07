$(document).ready(function() {
newUser = {};

console.log("does it work?");
$("#submit-user").on("click", function(event) {
  event.preventDefault();
  
    var newUser = {
        name: $("#name").val().trim(),
        email: $("#email").val().trim(),
        phone: $("#phone").val().trim(),
        zipcode: $("#zipcode").val().trim(),
        type: $("#q1").val().trim(),
        ability: $("#q2").val(),
        powderhound: $("#q3").val()
    };

  console.log('newUser', newUser);
    var scores = [
        //$("#q1").val(),
        $("#q2").val(),
        $("#q3").val()
        ];
    console.log('scores', scores)
  
    $.ajax("/api/user", {
      type: "POST",
      data: newUser,
      success: function(result){
        console.log(result);
        return result }
    }).then(function(response) {
      console.log("newUser", newUser);
      var id = response.id;

      console.log('response', response.id);
      
      console.log("new user created");
      window.location.href = "/user/" + id;
      res.json(res);
      //res.end();
    });

  });

  function findMatch() {

      //setting variables to find match
      var newFriendsScores = req.body.scores;
      var scoresArr = [];
      var bestMatch = 0;

      //loop through friends
      for(var i = 0; i < dbUsers.length; i++){
        var scoresDiff = 0;
        console.log("dbUsers", dbUsers);
        
        //loop through friends scores
        for(var j = 0; j < newFriendsScores.length; j++){
          //compare each friends scores against the new friend
          scoresDiff += (Math.abs(parseInt(dbUsers[i].scores[j]) - parseInt(newFriendsScores[j])));
        }
        
        scoresArr.push(scoresDiff);

      }
      
      //loop through scores to find best match in array
      for(var i = 0; i < scoresArr.length; i++){
        if(scoresArr[i] <= scoresArr[bestMatch]){
          bestMatch = i;
        }
      }
      console.log('bestMatch', bestMatch);

      //return bestMatch data
      var yourBestFriend = dbUsers[bestMatch];
      res.json(yourBestFriend);
      
      //push new friend object to list of friends array
      dbUsers.push(req.body);
  };

});


