import express from 'express';
const app = express();
import posts from './routes/posts.js'
const PORT = process.env.PORT || 8000;
import logger from './logger.js'

// app.get("/about",(req,res)=>{
//   res.sendFile(path.join(__dirname,'public','index.html')) // to send a file in express
// })
// ---- The above method to send static files is too junky , instead we can use .static to decalre a folder as static and express will automatically send the files inside that folder as static files

// app.use(express.static(path.join(__dirname,'public')))

app.use(express.json());
app.use(logger)
// app.use(express.urlencoded());

app.use('/api/posts',posts);
app.listen(PORT, () => console.log(`Server running on port ${PORT} OK`)); // Listening for request on port 8000
