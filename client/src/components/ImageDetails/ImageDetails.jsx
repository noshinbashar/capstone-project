import "./ImageDetails.scss";
import Likes from "./../../assets/icons/likes.svg"

function ImageDetails({ selectedImage }) {
  // const formatDate = (timestamp) => {
  //   const date = new Date(timestamp);
  //   const formattedDate = `${date.getMonth() + 1}/${date.getDate() + 1}/${date.getFullYear()}`;
  //   return formattedDate;
  // };

  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const timeDifference = now - date;

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      return 'Just now';
    }
  }

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
            <p>Posted {formatDate(selectedImage.timestamp)}</p>
          </div>

        </div>

      </div>
    </>
  )
}

export default ImageDetails
