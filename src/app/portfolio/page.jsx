"use client"

import { motion } from "framer-motion";
import React, { useState } from "react";

const PortfolioPage = () => {
    const [image, setImage] = useState(null);

    const handleImageUpload = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
    };

    // CSS styles as a template literal string
    const styles = `
        /* Style for the container */
        .upload-container {
          width: 80%;
          max-width: 500px;
          height: 80%;
          max-height: 500px;
          border: 2px dashed black;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Style for the file input */
        .upload-input {
          display: none;
        }

        /* Style for the label */
        .upload-label {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        /* Style for the uploaded image */
        .uploaded-image {
          max-width: 100%;
          max-height: 100%;
        }
    `;

    return (
        <>
            {/* CSS styles embedded within a style tag */}
            <style>{styles}</style>
            <motion.div
                className="h-screen flex justify-center items-center"
                initial={{ y: "-200vh" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1 }}
            >
                <div className="upload-container">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="upload-input"
                        id="imageUpload"
                    />
                    <label htmlFor="imageUpload" className="upload-label">
                        {image ? (
                            <img
                                src={URL.createObjectURL(image)}
                                alt="Uploaded"
                                className="uploaded-image"
                            />
                        ) : (
                            "Drag and Drop Images Here"
                        )}
                    </label>
                </div>
            </motion.div>
        </>
    );
};

export default PortfolioPage;
