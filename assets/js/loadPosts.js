async function loadPosts() {
  const postsContainer = document.getElementById("posts");

  const postFiles = await fetch("_posts/index.txt").then((res) => res.text());
  const files = postFiles.trim().split("\n");

  for (const file of files) {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    const postContent = await fetch(`_posts/${file}`).then((res) => res.text());
    postDiv.innerHTML = marked(postContent);

    postsContainer.appendChild(postDiv);
  }
}
