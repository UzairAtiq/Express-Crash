const logger = ((req,res,next)=>{
  console.log(`Method: ${req.method} URl: ${req.url}`)
  next();
})
export default logger;