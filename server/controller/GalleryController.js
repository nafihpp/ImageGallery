const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/tmp/my-uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
const upload = multer({ storage: storage })

const uploadImage = async (req, res) => {
    try {
        return res.status(200).json("success");
    } catch (error) {
        res.status(400).json({
            message: "error",
        });
    }
};

const getAllImages = async (req, res) => {
    try {
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