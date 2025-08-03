// const express = require('express');
import express from "express";
import {
  getAllPosts,
  getPostID,
  updatePost,
  createPost,
  deletePost
} from './controllers/postControllers.js'
const router = express.Router();


//For getting all posts
router.get("/", getAllPosts);
//Fro gettifn a post with a specific id
router.get("/:id", getPostID);

//Handling Posts
router.post("/",createPost );
//Updating posts
router.put("/:id", updatePost);

//Deleting posts
router.delete("/:id", deletePost);

// module.exports = router;
export default router;
