const express = require("express"); // Common JS
const app = express(); // Used for all funcitons
const path = require('path');

app.get("/", (req, res) => {
  // to define get behaviour on root directory
  // res.send("<h1>Hello world!<h1/>")
  res.send({ message: "Hello world" }); // We do not need to manually set content type headers in express 
});
app.get("/about",(req,res)=>{
  res.sendFile(path.join(__dirname,'public','index.html')) // to send a file in express
})
app.listen(8000, () => console.log("Server running on port 8000 OK")); // Listening for request on port 8000
