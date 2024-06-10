//js for the form population

document
  .getElementById("postForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const username = document.getElementById("username").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    // Create a post object
    const post = {
      username: username,
      title: title,
      content: content,
      };

    // Retrieve existing posts from localStorage
    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    // Add new post to posts array
    posts.push(post);

    // Save back to localStorage
    localStorage.setItem("posts", JSON.stringify(posts));

    // Optionally, clear the form after submission
    document.getElementById("postForm").reset();

    // Optionally, alert the user or show a message
    alert("Cheers your post submitted successfully!");

    // Redirect to the main blog page
    window.location.href = "index.html"; // Change this to the actual path of your main blog page
  });
/* Event Listener for Toggle Button*/
document.getElementById("mode-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});