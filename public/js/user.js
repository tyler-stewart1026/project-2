// $(document).ready(function() {
//   // Gets an optional query string from our url (i.e. ?post_id=23)
//   var url = window.location.search;
//   var userID;
//   // Sets a flag for whether or not we're updating a post to be false initially
//   var updating = false;

//   // If we have this section in our url, we pull out the post id from the url
//   // In localhost:8080/cms?post_id=1, userID is 1
//   if (url.indexOf("?user_id=") !== -1) {
//     userID = url.split("=")[1];
//     getPostData(userID);
//   }

//   // Getting jQuery references to the post body, title, form, and category select
//   var nameInput = $("#name");
//   var emailInput = $("#email");
//   var phoneInput = $("#phone");
//   var zipcodeInput = $("#zipcode");
//   var typeInput = $("#q1");
//   var abilityInput = $("#q2");
//   var powderhoundInput = $("#q3");
//   var userForm = $("#submit-user");

//   // Adding an event listener for when the form is submitted
//   $(userForm).on("submit", function handleFormSubmit(event) {
//     event.preventDefault();
//     // Wont submit the post if we are missing a body or a title
//     if (!emailInput.val().trim() || !nameInput.val().trim()) {
//       return;
//     }
//     // Constructing a newUser object to hand to the database
//     var newUser = {
//       name: nameInput.val().trim(),
//       email: emailInput.val().trim(),
//       phone: phoneInput.val().trim(),
//       zipcode: zipcodeInput.val().trim(),
//       type: typeInput.val().trim(),
//       ability: abilityInput.val(),
//       powderhound: powderhoundInput.val()
//     };

//     console.log(newUser);

//     // If we're updating a post run updatePost to update a post
//     // Otherwise run submitPost to create a whole new post
//     if (updating) {
//       newUser.id = userID;
//       updatePost(newUser);
//     }
//     else {
//       submitPost(newUser);
//     }
//   });

//   // Submits a new post and brings user to blog page upon completion
//   function submitUser(User) {
//     $.post("/api/user/", User, function() {
//       window.location.href = "/user";
//     });
//   }


//   // Gets post data for a post if we're editing
//   function getUserData(id) {
//     $.get("/api/user/" + id, function(data) {
//       if (data) {
//         // If this post exists, prefill our cms forms with its data
//         nameInput.val(data.name);
//         emailInput.val(data.email);
//         phoneInput.val(data.phone);
//         zipcodeInput.val(data.zipcode);
//         typeInput.val(data.type);
//         abilityInput.val(data.ability);
//         powderhoundInput.val(data.powderhound);

//         // If we have a post with this id, set a flag for us to know to update the post
//         // when we hit submit
//         updating = true;
//       }
//     });
//   }

//   // Update a given post, bring user to the blog page when done
//   function updateUser(user) {
//     $.ajax({
//       method: "PUT",
//       url: "/api/user",
//       data: user
//     })
//       .then(function() {
//         window.location.href = "/user";
//       });
//   }
// });




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

