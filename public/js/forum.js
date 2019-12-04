$("#forum-submit").on("click", function(event) {
  event.preventDefault();

  var titleInput = $("#title")
    .val()
    .trim();
  var authorInput = $("#author")
    .val()
    .trim();
  var bodyInput = $("#body")
    .val()
    .trim();

  var newPost = {
    title: titleInput,
    author: authorInput,
    body: bodyInput
  };

  $.ajax("/api/forums", {
    type: "POST",
    data: newPost
  }).then(function() {
    location.reload();
  });
});
