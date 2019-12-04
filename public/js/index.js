// placeSearch({
//   key: "hfKnbDdg4J5HEbbe3NoAbdudtAa7DAxG",
//   container: document.querySelector("#place-search-input")
// });

var forumContainer = $(".forum-container");
var posts;

$(document).ready(function() {
  function getPosts() {
    $.get("/api/forums", function(data) {
      console.log("Posts ", data);
      posts = data;
      if (!posts || !posts.length) {
        displayEmpty();
      } else {
        initializeRows();
      }
    });
  }

  getPosts();

  // This function displays a message when there are no posts
  function displayEmpty() {
    forumContainer.empty();
    var messageH2 = $("<h2>");
    messageH2.css({ "text-align": "center", "margin-top": "50px" });
    messageH2.html(
      "No posts yet for this category, navigate <a href='/cms'>here</a> in order to create a new post."
    );
    forumContainer.append(messageH2);
  }

  // InitializeRows handles appending all of our constructed post HTML inside
  // blogContainer
  function initializeRows() {
    forumContainer.empty();
    var postsToAdd = [];
    for (var i = 0; i < posts.length; i++) {
      postsToAdd.push(createNewRow(posts[i]));
    }
    forumContainer.append(postsToAdd);
  }

  // This function constructs a post's HTML
  function createNewRow(post) {
    var newPostCard = $("<div>");
    newPostCard.addClass("card");
    var newPostCardHeading = $("<div>");
    newPostCardHeading.addClass("card-header");
    var deleteBtn = $("<button>");
    deleteBtn.text("x");
    deleteBtn.addClass("delete btn btn-danger");
    var editBtn = $("<button>");
    editBtn.text("EDIT");
    editBtn.addClass("edit btn btn-default");
    var newPostTitle = $("<h2>");
    var newPostDate = $("<small>");
    var newPostCategory = $("<h5>");
    newPostCategory.text(post.category);
    newPostCategory.css({
      float: "right",
      "font-weight": "700",
      "margin-top": "-15px"
    });
    var newPostCardBody = $("<div>");
    newPostCardBody.addClass("card-body");
    var newPostBody = $("<p>");
    newPostTitle.text(post.title + " ");
    newPostBody.text(post.body);
    var formattedDate = new Date(post.createdAt);
    formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
    newPostDate.text(formattedDate);
    newPostTitle.append(newPostDate);
    newPostCardHeading.append(deleteBtn);
    newPostCardHeading.append(editBtn);
    newPostCardHeading.append(newPostTitle);
    newPostCardHeading.append(newPostCategory);
    newPostCardBody.append(newPostBody);
    newPostCard.append(newPostCardHeading);
    newPostCard.append(newPostCardBody);
    newPostCard.data("post", post);
    return newPostCard;
  }
  
});

// The API object contains methods for each kind of request we'll make
const API = {
  getCity: function(location) {
    const url = `api/cities/${location}`;
    const type = "GET";
    return $.ajax({ url, type });
  },

  getTrails: function() {
    return $.ajax({
      url: "api/trails/",
      type: "GET"
    });
  },

  // getPosts: function() {
  //   const url = "api/forums/";
  //   const type = "GET";
  //   return $.ajax({url, type});
  // },

  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

$("#submitBtn").on("click", () => {
  event.preventDefault();
  console.log("button click");
  const currentSearchVal = $("#place-search-input").val();
  console.log(currentSearchVal);
  if (currentSearchVal.length > 0) {
    API.getCity(currentSearchVal)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  API.getTrails();
});

// refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);

// $exampleList.on("click", ".delete", handleDeleteBtnClick);
