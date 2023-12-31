const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
//Port
const PORT = process.env.PORT;
//routes import
const GalleryRoute = require("./routes/GalleryRoute");
const { logger } = require("./middlewares/logger");

app.use(express.json());
app.use(cors());
app.use(express.static("public"))

app.use(logger);

//routes
app.use("/api", GalleryRoute);

app.use("*", (req, res) => {
    res.status(404).json({
        message: "Route does not exist",
    });
});

app.listen(PORT, () => {
    console.log(`server running in ${PORT}`);
});