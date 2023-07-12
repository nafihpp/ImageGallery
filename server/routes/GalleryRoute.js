const express = require("express");
const {
    getAllImages,
    uploadImage,
} = require("../controller/GalleryController");
const router = express.Router();

router.get("/getall", getAllImages);
router.post("/upload", uploadImage);

module.exports = router;