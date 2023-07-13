const multer = require("multer");
const fs = require('fs');

const uploadFolder = 'public/images';

if (!fs.existsSync(uploadFolder)) {
    fs.mkdirSync(uploadFolder, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadFolder)
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      const extension = file.originalname.split(".").pop();
      cb(null, file.fieldname + '-' + uniqueSuffix + "." + extension)
    }
})
const upload = multer({ storage: storage })

module.exports = {upload};
