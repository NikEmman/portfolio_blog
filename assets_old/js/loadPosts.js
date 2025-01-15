// loadPosts.js
async function loadPosts() {
  const postsContainer = document.getElementById("posts");
  if (!postsContainer) return;

  try {
    const response = await fetch("_posts/index.txt");

    if (!response.ok) {
      throw new Error(`Failed to load index.txt: ${response.status}`);
    }

    const postFiles = await response.text();
    const files = postFiles.trim().split("\n");

    // Clear the loading message
    postsContainer.innerHTML = "";

    // Configure marked to use highlight.js
    marked.setOptions({
      highlight: function (code, lang) {
        if (lang && hljs.getLanguage(lang)) {
          return hljs.highlight(code, { language: lang }).value;
        }
        return hljs.highlightAuto(code).value;
      },
    });

    for (const file of files) {
      const postDiv = document.createElement("div");
      postDiv.classList.add("post");

      try {
        const postResponse = await fetch(`_posts/${file}`);
        if (!postResponse.ok) {
          throw new Error(`Failed to load ${file}: ${postResponse.status}`);
        }

        const postContent = await postResponse.text();
        const lines = postContent.split("\n");
        const title = lines[0].replace("#", "").trim();
        const preview = lines.slice(0, 5).join("\n");

        postDiv.innerHTML = marked.parse(preview);

        const readMoreLink = document.createElement("a");
        readMoreLink.href = `post.html?file=${encodeURIComponent(file)}`;
        readMoreLink.textContent = "Read more →";
        readMoreLink.classList.add("read-more");
        postDiv.appendChild(readMoreLink);

        postsContainer.appendChild(postDiv);
      } catch (error) {
        console.error(`Error loading post ${file}:`, error);
        postDiv.innerHTML = `<p>Error loading post: ${file}</p>`;
        postsContainer.appendChild(postDiv);
      }
    }
  } catch (error) {
    console.error("Error loading posts:", error);
    if (postsContainer) {
      postsContainer.innerHTML = "<p>Error loading blog posts</p>";
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (!document.getElementById("posts")) return;

  const checkDependencies = setInterval(() => {
    if (window.marked && window.hljs) {
      clearInterval(checkDependencies);
      loadPosts();
    }
  }, 100);

  setTimeout(() => {
    clearInterval(checkDependencies);
    if (!window.marked || !window.hljs) {
      console.error("Required dependencies failed to load");
      const postsContainer = document.getElementById("posts");
      if (postsContainer) {
        postsContainer.innerHTML =
          "<p>Error: Required dependencies failed to load</p>";
      }
    }
  }, 5000);
});
