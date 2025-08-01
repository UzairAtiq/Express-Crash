const express = require('express'); // Common JS 
const app = express(); // Used for all funcitons 
app.get('/',(req,res)=>{ // to define get behaviour on root directory 
  res.send("<h1>Hello world!<h1/>") 
})
app.listen(8000,()=>console.log("Server running on port 8000 OK")) // Listening for request on port 8000