const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connectDb } = require("./config/dbConfig");

const app = express();
//Port
const PORT = process.env.PORT;
//routes import
const GalleryRoute = require("./routes/GalleryRoute");

app.use(express.json());
app.use(cors());
connectDb();

//routes
app.use("/api", GalleryRoute);

app.listen(PORT, () => {
    console.log(`server running in ${PORT}`);
});