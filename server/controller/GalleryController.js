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

const getAllImages = async (req, res) => {
    try {
        const filespath = path.join(process.cwd(),"public/images");
        fs.readdir(filespath, (err, files) => {
            console.log(files.length);
        })
        
        return res.status(200).json("success");
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