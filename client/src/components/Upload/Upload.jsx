import "./Upload.scss"
import UploadImage from "./../../assets/icons/upload.jpg"
import { useRef, useState } from "react"

function Upload() {
    const inputRef = useRef(null);
    const [image, setImage] = useState("")

    const handleImageClick = () => {
        inputRef.current.click();
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        setImage(event.target.files[0])

    }



    return (
        <>
            <div className="upload">
                <div onClick={handleImageClick}>
                    {image ? (
                        <img src={URL.createObjectURL(image)} alt="" />
                    ) : (
                        <img src={UploadImage} alt="" />
                    )}
                    <input type="file" ref={inputRef} onChange={handleImageChange} className="upload__input" />
                </div>
            </div>
        </>
    )
}

export default Upload
