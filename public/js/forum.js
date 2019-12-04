$(".create-form").on("submit", function(event) {
  event.preventDefault();

  var newPost = {
    title: $("#title")
      .val()
      .trim(),
    author: $("#author")
      .val()
      .trim(),
    body: $("#body")
      .val()
      .trim()
  };

  $.ajax("/api/forumss", {
    type: "POST",
    data: newPost
  }).then(function() {
    console.log("new post added");
    location.reload();
  });
});
