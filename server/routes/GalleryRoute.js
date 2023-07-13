const express = require("express");
const {
    getAllImages,
    uploadImage,
} = require("../controller/GalleryController");
const { upload } = require("../middlewares/multer");


const router = express.Router();

router.post("/upload", upload.single("gallery_image"), uploadImage);
router.get("/getall",  getAllImages);


module.exports = router;