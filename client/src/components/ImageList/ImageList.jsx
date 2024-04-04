import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import UploadImage from "./../../assets/icons/upload.png";
import "./ImageList.scss";
import axios from "axios";

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

    const handleUploadImage = async (event) => {

        event.preventDefault()
        let image = event.target.image.files[0]
        let imageName = event.target.image.files[0].name
        let title = event.target.title.value
        let medium = event.target.medium.value
        let description = event.target.description.value

        const formData = {
            image: image,
            imageName: imageName,
            title: title,
            medium: medium,
            description: description
        }

        try {
            const response = await axios.post(`http://localhost:8080/images/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            console.log(response)
            // Refresh the page after successful upload
            window.location.reload()
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    }

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
            {/* ------------------------------------- Upload ---------------------------------------- */}
            <div className="upload">
                <p className="images__title">Upload Art Work</p>
                <form onSubmit={handleUploadImage} className="upload__box">
                    <div onClick={handleImageClick}>
                        {image ? (
                            <img className="upload__image" src={URL.createObjectURL(image)} alt="" />
                        ) : (
                            <img className="upload__image" src={UploadImage} alt="" />
                        )}
                        <input type="file" ref={inputRef} onChange={handleImageChange} name="image" accept="image/*" className="upload__input" />
                    </div>
                    <input className="upload__title" type="text" placeholder="Title" name="title" value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)} />
                    <input className="upload__medium" type="text" placeholder="Medium of art" name="medium" value={newMedium}
                        onChange={(e) => setNewMedium(e.target.value)} />
                    <input className="upload__description" type="text" placeholder="Write description here . . ." name="description" value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)} />
                    <button className="upload__button" type="submit">Upload</button>
                </form>

            </div>
        </>
    );
}

export default ImageList;