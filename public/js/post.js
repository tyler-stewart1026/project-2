// import { clearScreenDown } from "readline";
$(document).ready(function() {
  // Gets an optional query string from our url (i.e. ?post_id=23)
  var url = window.location.search;
  var postId;
  // var authorId;
  // Sets a flag for whether or not we're updating a post to be false initially
  var updating = false;

  // If we have this section in our url, we pull out the post id from the url
  // In localhost:8080/cms?post_id=1, postId is 1
  if (url.indexOf("?post_id=") !== -1) {
    postId = url.split("=")[1];
    getPostData(postId);
  }
  // else if (url.indexOf("?user_id=") !== -1) {
  //   authorId = url.split("=")[1];
  // }

  // Getting jQuery references to the post body, title, form, and category select
  var bodyInput = $("#body");
  var titleInput = $("#title");
  var postForm = $("#forum-submit");
  // var authorSelect = $("#author");

  // Adding an event listener for when the form is submitted
  $(postForm).on("submit", function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body or a title
    if (
      !titleInput.val().trim() ||
      !bodyInput.val().trim()
      // ||
      // !authorSelect.val()
    ) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newPost = {
      title: titleInput.val().trim(),
      body: bodyInput.val().trim()
      // AuthorId: authorSelect.val()
    };

    console.log(newPost);

    // If we're updating a post run updatePost to update a post
    // Otherwise run submitPost to create a whole new post
    if (updating) {
      newPost.id = postId;
      updatePost(newPost);
    } else {
      submitPost(newPost);
    }
  });

  // Submits a new post and brings user to blog page upon completion
  function submitPost(Post) {
    $.post("/api/forums/", Post, function() {
      window.location.href = "/forum";
    });
  }

  // Gets post data for a post if we're editing
  function getPostData(id) {
    $.get("/api/forums/" + id, function(data) {
      if (data) {
        // If this post exists, prefill our cms forms with its data
        titleInput.val(data.title);
        bodyInput.val(data.body);
        // If we have a post with this id, set a flag for us to know to update the post
        // when we hit submit
        updating = true;
      }
    });
  }

  // Update a given post, bring user to the blog page when done
  function updatePost(post) {
    $.ajax({
      method: "PUT",
      url: "/api/forums",
      data: post
    }).then(function() {
      window.location.href = "/forum";
    });
  }

  // function getAuthor() {
  //   $.get("/api/user", function(data) {
  //     authors = data;
  //     console.log("authors", authors);
  //     // if (!authors || !authors.length) {
  //     //   window.location.href = "/create-user";
  //     // } else {
  //     var authorArray = [];
  //     for (let i = 0; i < authors.length; i++) {
  //       // authorArray.push(authors[i].name);
  //       authorArray.push(displayAuthors(authors[i]));
  //     }
  //     // console.log(authorArray);
  //     authorSelect.empty();
  //     authorSelect.append(authorArray);
  //   });
  // }

  // getAuthor();

  // function displayAuthors(authors) {
  //   var listOption = $("<option>");
  //   // listOption.attr("value", authors.id);
  //   listOption.text(authors.name);
  //   return listOption;
  // }
});

