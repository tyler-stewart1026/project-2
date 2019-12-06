// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;

// const client = require('twilio')(accountSid, authToken);

// client.messages
//       .create({body: 'Hi there!', from: '+18014480771', to: '+18015411587'})
//       .then(message => console.log(message.sid));

$("#submit-newuser").on("submit", function(event) {
    event.preventDefault();
    alert("does it work?");
  
    var newUser = {
        "name": $("#name").val().trim(),
        "email":$("#email").val().trim(),
        "phone":$("#phone").val().trim(),
        "zipcode":$("#zipcode").val().trim(),
        "type":$("#q1").val().trim(),
        "ability":$("#q2").val(),
        "powderhound":$("#q3").val(),

    };

    var scores = [
        $("#q1").val(),
        $("#q2").val(),
        $("#q3").val()
        ];
    console.log('scores', scores)
  
    $.ajax("/api/user", {
      type: "POST",
      data: newUser
    }).then(function() {
      console.log("new user created");
      location.reload();
    });

    showBestMatch();
  });

  function showBestMatch() {
    $("#matchModal").modal('show');
  };

