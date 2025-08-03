const output = document.getElementById("output");
const button = document.getElementById("button");
const buttonPost = document.getElementById("submit");
const form = document.getElementById("add-post-form");
const fetchData = async () => {
  const response = await fetch("http://localhost:8080/api/posts");
  const posts = await response.json();
  output.innerHTML = "";
  posts.forEach((post) => {
    const postEl = document.createElement("div");
    postEl.textContent = post.name;
    output.appendChild(postEl);
  });
};
const submitform = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const title = formData.get("title");
  const res = await fetch("http://localhost:8080/api/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ title }),
  });
  // let newPost = await res.json();
  const newPost = await res.json();
  const postEl = document.createElement("div");
  postEl.textContent = newPost.name;
  output.appendChild(postEl);
};
button.addEventListener("click", fetchData);
form.addEventListener("submit", submitform);
