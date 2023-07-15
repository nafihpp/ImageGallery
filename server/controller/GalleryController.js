const path = require("path");
const fs = require("fs");

const uploadImage = async (req, res) => {
    try {
        return res.status(200).json({message:"Image Uploaded Successfully"});
    } catch (error) {
        res.status(400).json({
            message: "Error uploading Image",
        });
    }
};

const getAllImages = async (req, res, next) => {
    try {
        const filespath = path.join(process.cwd(),"public/images");
        fs.readdir(filespath, (err, files) => {
            if(files.length > 0){
                const current = files.map((file) => `${req.protocol}://${req.get("host")}/images/${file}`);
                console.log(current)
                res.status(200).json({images:current})
            }
            else{
                res.status(400).json({message:"no Images in Gallery"})
            }
        })
        
    } catch (error) {
        res.status(400).json({
            message: "error",
        });
    }
};

module.exports = {
    getAllImages,
    uploadImage,
};