import express from 'express';
const app = express();
import posts from './routes/posts.js'
const PORT = process.env.PORT || 8000;
import logger from './middleware/logger.js'
import errorHandler from './middleware/errorHandler.js';
import {fileURLToPath} from 'url';
import { dirname,join } from 'path';
// Getting the directory
let __filename = fileURLToPath(import.meta.url);
let __dirname = dirname(__filename);
// ---- The above method to send static files is too junky , instead we can use .static to decalre a folder as static and express will automatically send the files inside that folder as static files

app.use(express.static(join(__dirname,'public')))

app.use(express.json());
app.use(logger)

// app.use(express.urlencoded());

app.use('/api/posts',posts);
app.use('/api/posts/:id',errorHandler)
app.use((req,res,next)=>{
  const error = new Error(`Not found`);
  error.status = 404;
  next(error);
})
app.listen(PORT, () => console.log(`Server running on port ${PORT} OK`)); // Listening for request on port 8000
