$(document).ready(function() {
// newUser = {};
// scores = [];

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

  //console.log('newUser', newUser);
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
        //console.log(result);
        return result }
    }).then(function(response) {
      //console.log("newUser", newUser);
      var id = response.id;

      //console.log('response', response.id);
      
      console.log("new user created");
      window.location.href = "/user/" + id;
      res.json(res);
      //res.end();
    });

  });

  $("#findMatch").on("click", function(event) {
    event.preventDefault();
    $.ajax("/api/user", {
      type: "GET",
      success: function(result){
        //console.log(result);
        return result }
    }).then(function(response) {
      //console.log("response", response[0]);
    
    //placeholder for pulling my user info
      var myUser = {
      name: "Matt",
      email: "matt@sbsef.com",
      phone: "801-541-1587",
      zipcode: "84117",
      type: "Skier",
      ability: "5" ,
      powderhound: "5"
  };

  //placeholder for bestMatch
  //console.log("response", response[14].ability);
    //var user = JSON.stringify(localStorage.setItem('user', {{{user}}}));
    console.log("user", myUser);
    
    var myAbility = parseInt(myUser.ability);
    var myPowderhound = parseInt(myUser.powderhound);
    var scores = [
      myAbility, myPowderhound
    ];

    console.log("scores", scores);
    
     // console.log("response", response);
      //setting variables to find match
      var myFriendScores = req.body.scores;
      var scoresArr = [];
      var bestMatch = 0;
      console.log("response.length", response.length);
      //loop through friends
      for(var i = 0; i < response.length; i++){
        var scoresDiff = 0;
        console.log("response[i]", response);
        //loop through friends scores
        for(var j = 0; j < myFriendScores.length; j++){
          //compare each friends scores against the new friend
          scoresDiff += (Math.abs(parseInt(response[i].scores[j]) - parseInt(myFriendScores[j])));
        }
        
        scoresArr.push(scoresDiff);
        
      }
      console.log("response", response);
      
      //loop through scores to find best match in array
      for(var i = 0; i < scoresArr.length; i++){
        if(scoresArr[i] <= scoresArr[bestMatch]){
          bestMatch = i;
        }
      }
      console.log('bestMatch', bestMatch);

      //return bestMatch data
      var yourBestFriend = response[bestMatch];
      res.json(yourBestFriend);
      
      //push new friend object to list of friends array
      response.push(req.body);
});

});

});


