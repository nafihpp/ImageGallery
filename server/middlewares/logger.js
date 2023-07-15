const fs = require("fs");
const { format, parseISO } = require('date-fns');

const logger = (req,res,next) =>{
    const currentTime = new Date();
    // const options = {
    //     day: '2-digit',
    //     month: '2-digit',
    //     year: 'numeric',
    //     hour: '2-digit',
    //     minute: '2-digit',
    //     hour12: true
    //   };
    // const DateOptions = currentTime.toLocaleString(options);
    // const ParseDate = parseISO(DateOptions);
    const formattedDate = format(currentTime, 'dd-MM-yyyy hh:mm a');

    const currentReq = {
        url: req.url,
        method: req.method,
        time:formattedDate,
    }

    fs.appendFile('log.txt', JSON.stringify(currentReq), (err) => {
        if (err) {
          console.error(err);
        }
    });
    next();
}

module.exports ={logger}