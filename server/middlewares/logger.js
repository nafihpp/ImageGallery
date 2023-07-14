const fs = require("fs");

const logger = (req,res,next) =>{
    console.log("inside Middleware");
    const currentReq = {
        "url": req.url,
        "method": req.method,
    }
    console.log(currentReq,'==cuyyyyy');

    fs.appendFile('log.txt', JSON.stringify(currentReq), (err) => {
        if (err) {
          console.error(err);
        }
    });
    next();
}

module.exports ={logger}