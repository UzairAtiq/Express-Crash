// const express = require('express');
import express from 'express';
const router = express.Router();

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
//For getting all posts
router.get("/", (req, res) => {
  const limit = req.query.limit; // request query
  if (!isNaN(limit) && limit > 0) {
    res.json(posts.slice(0, limit));
  }
  res.json(posts);
});
//Fro gettifn a post with a specific id
router.get("/:id", (req, res) => {
  //For getting the dynamic parameter from the url
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (post) {
    return res.status(200).json(post);
  }
  res.status(404);
  res.json({msg:"Post with the id was not found"})
});

// module.exports = router;
export default router;