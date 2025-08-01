const express = require("express"); // Common JS
const app = express(); // Used for all funcitons
const path = require('path');
const PORT = process.env.PORT || 8000;

// app.get("/", (req, res) => {
//   // to define get behaviour on root directory
//   // res.send("<h1>Hello world!<h1/>")
//   res.send({ message: "Hello world" }); // We do not need to manually set content type headers in express 
// });
// app.get("/about",(req,res)=>{
//   res.sendFile(path.join(__dirname,'public','index.html')) // to send a file in express
// })
// ---- The above method to send static files is too junky , instead we can use .static to decalre a folder as static and express will automatically send the files inside that folder as static files 

// app.use(express.static(path.join(__dirname,'public')))

const posts = [{
  id : 1,
  name : "uzair"
},{
  id : 2,
  name : 'asad'
},{
  id: 3,
  name : "zubair"
}]
//For getting all posts
app.get('/api/posts',(req,res)=>{
res.json(posts);
})
//Fro gettifn a post with a specific id 
app.get('/api/posts/:id',(req,res)=>{
  //For getting the dynamic parameter from the url 
  const id = parseInt(req.params.id);
  res.json(posts.filter((post)=>post.id===id));
})

app.listen(PORT, () => console.log(`Server running on port ${PORT} OK`)); // Listening for request on port 8000
