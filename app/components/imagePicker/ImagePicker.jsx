"use client";

import React, { useRef, useState } from 'react';

import styles from "./ImagePicker.module.css";
import Image from 'next/image';

const ImagePicker = ({label, name}) => {
    const [pickedImage, setPickedImage] = useState();
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.click();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        }

        fileReader.readAsDataURL(file);
    };

    return (
        <div className={styles.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={styles.controls}>
                <div className={styles.preview}>
                    {!pickedImage && <p>No image picked yet!</p>}
                    {pickedImage && <Image src={pickedImage} alt='user selected image' fill  />}
                </div>
                <input
                    ref={inputRef}
                    className={styles.input}
                    name={name} 
                    type="file"
                    id={name}
                    onChange={handleImageChange}
                    accept='image/png, image/jpeg'
                    required
                />
                <button onClick={handleClick} className={styles.button} type="button">Pick an Image</button>
            </div>
        </div>
    );
};

export default ImagePicker;