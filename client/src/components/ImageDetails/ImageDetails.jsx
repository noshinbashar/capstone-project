import "./ImageDetails.scss";
import Likes from "./../../assets/icons/likes.svg"

function ImageDetails({ selectedImage }) {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const formattedDate = `${date.getMonth() + 1}/${date.getDate() + 1}/${date.getFullYear()}`;
    return formattedDate;
  };

  return (
    <>

      <div className="selectedImage">

        <div className="selectedImage__title">
          <p>{selectedImage.title}</p>
        </div>

        <div className="selectedImage__medium">
          <p>{selectedImage.medium}</p>
        </div>

        <div className="selectedImage__description">
          <p>{selectedImage.description}</p>
        </div>

        <div className="selectedImage__container">
          <img src={selectedImage.image} alt="Selected Image" className="selectedImage__image" />
        </div>

        <div className="data">

          <div className="data__item">
            <p className="data__interaction"> <img className="data__icons" src={Likes} alt="Likes" /> {selectedImage.likes}</p>
          </div>

          <div className="data__time">
            <p>Posted on {formatDate(selectedImage.timestamp)}</p>
          </div>

        </div>

      </div>
    </>
  )
}

export default ImageDetails
