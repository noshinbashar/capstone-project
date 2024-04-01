import { Link } from "react-router-dom"
import { useRef, useState } from "react"
import UploadImage from "./../../assets/icons/upload.png"
import "./ImageList.scss"

function ImageList({ Imagelist, selectedImage }) {

    const inputRef = useRef(null);
    const [image, setImage] = useState("")
    const [newTitle, setNewTitle] = useState("");
    const [newMedium, setNewMedium] = useState("");
    const [newDescription, setNewDescription] = useState("");


    const handleImageClick = () => {
        inputRef.current.click();
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    }

    const handleUploadImage = () => {
        if (image) {
            const newImage = {
                id: Date.now(),
                image: URL.createObjectURL(image),
                title: newTitle,
                medium: newMedium,
                description: newDescription
            };

            const updatedImageList = [...Imagelist, newImage];
            setImage(null);
            setNewTitle("");
            setNewMedium("");
            setNewDescription("");
            console.log(updatedImageList);
        }
    }
    return (
        <>
            {/* --------------------------------- Image list --------------------------------- */}

            <div className="images">
                <p className="images__title">More Art Works</p>

                <ul className="imagelist">
                    {Imagelist
                        .filter((images) => (images.id) !== selectedImage.id)
                        .map((images) => {
                            return (
                                <Link to={`/mygallery/${images.id}`} className="link">
                                    <li className="imagelist__item" >
                                        <img className="imagelist__images" src={`${images.image}`} alt="image List"></img>
                                    </li>
                                </Link>
                            )

                        })}
                </ul>
            </div>

            {/* --------------------------------- Upload Art Work --------------------------------- */}


            <div className="upload">
                <p className="images__title">Upload Art Work</p>
                <div onClick={handleImageClick}>
                    {image ? (
                        <img src={URL.createObjectURL(image)} alt="" />
                    ) : (
                        <img className="upload__image" src={UploadImage} alt="" />
                    )}
                    <input type="file" ref={inputRef} onChange={handleImageChange} className="upload__input" />
                </div>
                <div className="upload__box">
                    <input className="upload__title" type="text" placeholder="Title" value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)} />
                    <input className="upload__medium" type="text" placeholder="medium" value={newMedium}
                        onChange={(e) => setNewMedium(e.target.value)} />
                    <input className="upload__description" type="text" placeholder="description" value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)} />
                </div>
                <button onClick={handleUploadImage}>Upload</button>
            </div>

        </>
    )
}

export default ImageList
