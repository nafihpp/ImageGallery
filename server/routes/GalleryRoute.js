const express = require("express");
const {
    getAllImages,
    uploadImage,
} = require("../controller/GalleryController");
const { upload } = require("../middlewares/multer");
const { auth } = require("../middlewares/auth");


const router = express.Router();

router.post("/upload", auth, upload.single("gallery_image"), uploadImage);
router.get("/getall",  getAllImages);


module.exports = router;