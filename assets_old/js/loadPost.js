// loadPost.js
async function loadPost() {
  const postContainer = document.getElementById("post-content");
  if (!postContainer) return;

  try {
    const params = new URLSearchParams(window.location.search);
    const file = params.get("file");

    if (!file) {
      throw new Error("No post file specified");
    }

    const postResponse = await fetch(`_posts/${file}`);
    if (!postResponse.ok) {
      throw new Error(`Failed to load post: ${postResponse.status}`);
    }

    // Configure marked
    marked.setOptions({
      highlight: function (code, language) {
        if (language && hljs.getLanguage(language)) {
          return hljs.highlight(code, { language }).value;
        }
        return hljs.highlightAuto(code).value;
      },
      langPrefix: "hljs language-", // Add the required hljs class
    });

    const postContent = await postResponse.text();
    const lines = postContent.split("\n");
    const title = lines[0].replace("#", "").trim();

    document.title = title;
    postContainer.innerHTML = marked.parse(postContent);

    // Manually trigger highlight.js after content is loaded
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block);
    });
  } catch (error) {
    console.error("Error loading post:", error);
    if (postContainer) {
      postContainer.innerHTML = "<p>Error loading post</p>";
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (!document.getElementById("post-content")) return;

  const checkDependencies = setInterval(() => {
    if (window.marked && window.hljs) {
      clearInterval(checkDependencies);
      loadPost();
    }
  }, 100);

  setTimeout(() => {
    clearInterval(checkDependencies);
    if (!window.marked || !window.hljs) {
      console.error("Required dependencies failed to load");
      const postContainer = document.getElementById("post-content");
      if (postContainer) {
        postContainer.innerHTML =
          "<p>Error: Required dependencies failed to load</p>";
      }
    }
  }, 5000);
});
