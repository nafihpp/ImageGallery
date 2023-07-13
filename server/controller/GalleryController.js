const uploadImage = async (req, res) => {
    try {
        console.log(req);
        return res.status(200).json("Image Uploaded Successfully");
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