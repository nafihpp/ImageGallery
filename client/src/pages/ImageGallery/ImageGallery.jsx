import React, { useEffect, useState } from "react";
import { ImageCard } from "../../components/ImageCard/ImageCard";
import { Progressbar } from "../../components/Progessbar";
import axios from "axios";

export const ImageGallery = () => {
    const [imageName, setImageName] = useState("");
    const [progress, setProgress] = useState(0);
    // useEffect(() => {
    //     fetchAllImages();
    // }, []);
    // const fetchAllImages = () => {
    //     fetch("").then(res).catch(err);
    // };
    const handleImage = (e) =>{
        const { name } = e.target.files[0];
        setImageName(name);
        uploadImage(e.target.files[0]);
      
    }
    const uploadImage = (image) =>{
        const formData = new FormData();
        formData.append("upload_file", image);
        console.log("what")
        axios("https://image-gallery-phi-sage.vercel.app/api/upload", {
            method: "POST",
            headers: { "Content-Type": "multipart/form-data" },
            onUploadProgress: (progressEvent) => {
              const progress = Math.round(
                (progressEvent.loaded / progressEvent.total) * 100
              );
              setProgress(progress);
            },
        }).then((response) =>{}).catch((err) => console.log(err)).finally()
    }
    return (
        <div className="p-3 overflow-hidden">
            <h1 className="text-[black] text-2xl font-bold text-center">Image Gallery</h1>
            <p className="text-gray-500 text-center text-lg mt-3">The Gallery is open for the World</p>
            <div className="flex items-center justify-center cursor-pointer mt-9">
            <label htmlFor="fileInput" className="cursor-pointer">
            <input
                type="file"
                id="fileInput"
                accept="image/*"
                className="input hidden"
                onChange={handleImage}
              />
                <a className="text-lg border-[1px] border-[#000] w-8 h-8 flex items-center justify-center border-dashed rounded-[50%]">+</a>
            </label>
            </div>
            <div>
                <Progressbar value={50} />
            </div>
            <div className="show-images mt-16 flex justify-between flex-wrap overflow-auto">
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />
            </div>
        </div>
    );
};
