import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import UploadImage from "./../../assets/icons/upload.png";
import "./ImageList.scss";

function ImageList({ Imagelist, selectedImage, onImageUpload }) {
    const inputRef = useRef(null);
    const [image, setImage] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [newMedium, setNewMedium] = useState("");
    const [newDescription, setNewDescription] = useState("");

    const handleImageClick = () => {
        inputRef.current.click();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };

    const handleUploadImage = async () => {
        if (image) {
            const formData = new FormData();
            formData.append('image', image);
            formData.append('title', newTitle);
            formData.append('medium', newMedium);
            formData.append('description', newDescription);

            try {
                const response = await fetch('/upload', {
                    method: 'POST',
                    body: formData
                });

                if (response.ok) {
                    const updatedImage = await response.json();
                    onImageUpload(updatedImage);
                } else {
                    console.error('Failed to upload image');
                }
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    };

    useEffect(() => {
        const handleImageClick = () => {
            inputRef.current.click();
        };

        const handleImageChange = (event) => {
            const file = event.target.files[0];
            setImage(file);
        };
    }, []);

    return (
        <>
            <div className="images">
                <p className="images__title">More Art Works</p>

                <ul className="imagelist">
                    {Imagelist
                        .filter((images) => images.id !== selectedImage.id)
                        .map((images) => {
                            return (
                                <Link to={`/mygallery/${images.id}`} className="link" key={images.id}>
                                    <li className="imagelist__item" >
                                        <img className="imagelist__images" src={`${images.image}`} alt="image List"></img>
                                    </li>
                                </Link>
                            )
                        })}
                </ul>
            </div>

            <div className="upload">
                <p className="images__title">Upload Art Work</p>
                <div className="upload__box">
                    <div onClick={handleImageClick}>
                        {image ? (
                            <img src={URL.createObjectURL(image)} alt="" />
                        ) : (
                            <img className="upload__image" src={UploadImage} alt="" />
                        )}
                        <input type="file" ref={inputRef} onChange={handleImageChange} className="upload__input" />
                    </div>
                    <input className="upload__title" type="text" placeholder="Title" value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)} />
                    <input className="upload__medium" type="text" placeholder="medium" value={newMedium}
                        onChange={(e) => setNewMedium(e.target.value)} />
                    <input className="upload__description" type="text" placeholder="description" value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)} />
                    <button className="upload__button" onClick={handleUploadImage}>Upload</button>
                </div>

            </div>
        </>
    );
}

export default ImageList;