//JS to retrieve the form details once it is available

document.addEventListener("DOMContentLoaded", function () {
  // Retrieve posts from localStorage
  const posts = JSON.parse(localStorage.getItem("posts")) || [];

  const postsContainer = document.getElementById("posts-container");

  // Check if there are posts available
  if (posts.length > 0) {
    posts.forEach((post) => {
      // Create a card element for each post
      const card = document.createElement("div");
      card.classList.add("card");

      const postTitle = document.createElement("h2");
      postTitle.textContent = post.title;
      card.appendChild(postTitle);

      const postUsername = document.createElement("h5");
      postUsername.textContent = `Posted by ${post.username} on ${post.date}`;
      card.appendChild(postUsername);

      const postContent = document.createElement("p");
      postContent.textContent = post.content;
      card.appendChild(postContent);

      // Append the card to the posts container
      postsContainer.appendChild(card);
    });
  } else {
    postsContainer.innerHTML = "<p>No posts available.</p>";
  }

  // add an event listener to the button to redirect to the form page
  document
    .getElementById("add-post-btn")
    .addEventListener("click", function () {
      window.location.href = "form.html"; // Change 'form.html' to the actual path of your form page
    });
});
/* Event Listener for Toggle Button*/
document.getElementById("mode-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});