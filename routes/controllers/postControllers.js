const posts = [
  {
    id: 1,
    name: "uzair",
  },
  {
    id: 2,
    name: "asad",
  },
  {
    id: 3,
    name: "zubair",
  },
];
const getAllPosts = (req, res) => {
  if (req.query.limit) {
    const limit = req.query.limit; // request query
    if (!isNaN(limit) && limit > 0) {
      return res.json(posts.slice(0, limit));
    }
  }

  res.json(posts);
};
const getPostID = (req, res, next) => {
  //For getting the dynamic parameter from the url
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (post) {
    return res.status(200).json(post);
  }
  if (!post) {
    console.log(id);
    const error = new Error(`A post with the id ${id} was not found.`);
    return next(error);
  }
};

const createPost = (req, res) => {
  console.log(req.body.title);
  let newPost = {
    id: posts.length + 1,
    name: req.body.title,
  };
  if (!newPost.name) {
    res.status(400).json({ msg: "please enter a name" });
  } else {
    posts.push(newPost);
    console.log(newPost);
    res.status(200).json({ [newPost.id]: `${newPost.name}` });
  }
};

const updatePost = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  post.title = req.body.title;
  res.send("Post updated!");
};

const deletePost = (req, res) => {
  const id = req.params.id;
  const post = posts.filter((posts) => posts.id !== id);
  res.json(post);
};

export { getAllPosts, getPostID, updatePost, createPost, deletePost };
