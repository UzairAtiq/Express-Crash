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

//Handling Posts 
router.post('/',(req,res)=>{
  console.log(req.body.title);
  let newPost = {
    id: posts.length+1,
    name : req.body.title
  }
  if(!newPost.name){
    res.status(400).json({msg:"please enter a name"})
  }else{
    posts.push(newPost);
    console.log(newPost)
    res.status(200).send("Sucessfull added new post")
  }
})
//Updating posts
router.put('/:id',(req,res)=>{
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if(!post){
    res.status(400).json({msg:"Please enter a name"});
  }
  post.title = req.body.title;
  res.send("Post updated!")
})

//Deleting posts 
router.delete('/:id',(req,res)=>{
  const id = req.params.id;
  const post = posts.filter((posts)=>posts.id!==id);
  res.json(post);
})

// module.exports = router;
export default router;