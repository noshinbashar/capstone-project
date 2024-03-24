import "./SelectedImage.scss"
function SelectedImage({ selectedImage }) {

    console.log(`${process.env.backendURL}/${selectedImage}`)
    return (

        <>
            <div className="imagecontainer">
                <img src={selectedImage} alt="Selected Image" className="imagecontainer__image" />
            </div>
        </>
    )
}

export default SelectedImage