// var forumContainer = $(".forum-container");
// var posts;

// $(document).ready(function() {
//   function getPosts() {
//     $.get("/api/forums", function(data) {
//       console.log("Posts ", data);
//       posts = data;
//       if (!posts || !posts.length) {
//         displayEmpty();
//       } else {
//         initializeRows();
//       }
//     });
//   }

//   getPosts();

//   // This function displays a message when there are no posts
//   function displayEmpty() {
//     forumContainer.empty();
//     var messageH2 = $("<h2>");
//     messageH2.css({ "text-align": "center", "margin-top": "50px" });
//     messageH2.html(
//       "No posts yet for this category, navigate <a href='/cms'>here</a> in order to create a new post."
//     );
//     forumContainer.append(messageH2);
//   }

//   // InitializeRows handles appending all of our constructed post HTML inside
//   // blogContainer
//   function initializeRows() {
//     forumContainer.empty();
//     var postsToAdd = [];
//     for (var i = 0; i < posts.length; i++) {
//       postsToAdd.push(createNewRow(posts[i]));
//     }
//     forumContainer.append(postsToAdd);
//   }

//   // This function constructs a post's HTML
//   function createNewRow(post) {
//     var newPostCard = $("<div>");
//     newPostCard.addClass("card");
//     var newPostCardHeading = $("<div>");
//     newPostCardHeading.addClass("card-header");
//     var deleteBtn = $("<button>");
//     deleteBtn.text("x");
//     deleteBtn.addClass("delete btn btn-danger");
//     var editBtn = $("<button>");
//     editBtn.text("EDIT");
//     editBtn.addClass("edit btn btn-default");
//     var newPostTitle = $("<h2>");
//     var newPostDate = $("<small>");
//     var newPostCategory = $("<h5>");
//     newPostCategory.text(post.category);
//     newPostCategory.css({
//       float: "right",
//       "font-weight": "700",
//       "margin-top": "-15px"
//     });
//     var newPostCardBody = $("<div>");
//     newPostCardBody.addClass("card-body");
//     var newPostBody = $("<p>");
//     newPostTitle.text(post.title + " ");
//     newPostBody.text(post.body);
//     var formattedDate = new Date(post.createdAt);
//     formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
//     newPostDate.text(formattedDate);
//     newPostTitle.append(newPostDate);
//     newPostCardHeading.append(deleteBtn);
//     newPostCardHeading.append(editBtn);
//     newPostCardHeading.append(newPostTitle);
//     newPostCardHeading.append(newPostCategory);
//     newPostCardBody.append(newPostBody);
//     newPostCard.append(newPostCardHeading);
//     newPostCard.append(newPostCardBody);
//     newPostCard.data("post", post);
//     return newPostCard;
//   }

//   $(".delete").on("click", function() {
//     var id = $(this).data("id");

//     $.ajax("/api/forums/" + id, {
//       type: "DELETE"
//     }).then(function() {
//       console.log("deleted post", id);
//       location.reload();
//     });
//   });
// });

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
