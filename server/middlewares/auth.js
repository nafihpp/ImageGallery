const auth = (req,res,next) =>{
    console.log("you have the access");
    next();
}

module.exports = {auth}