import colors from 'colors'
const logger = ((req,res,next)=>{
  const methodColors = {
    GET : 'red',
    PUT : 'yellow',
    POST : 'green',
    DELETE : 'blue'
  };
  const color = methodColors[req.method];

  console.log(`Method: ${req.method} URl: ${req.url}`[color])
  next();
})
export default logger;