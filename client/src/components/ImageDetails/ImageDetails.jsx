import "./ImageDetails.scss";
import Likes from "../../assets/Images/likes.svg"
import Views from "../../assets/Images/views.svg"

function ImageDetails({ selectedImage }) {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const formattedDate = `${date.getMonth() + 1}/${date.getDate() + 1}/${date.getFullYear()}`;
    return formattedDate;
  };

  return (
    <>

      <div className="imageName">
        <h1>{selectedImage.title}</h1>
      </div>

      <div className="data">

        <div className="data__item">
          <p className="data__channel">{selectedImage.medium}</p>
          <p className="data__date">{formatDate(selectedImage.timestamp)}</p>
        </div>

        <div className="data__item">
          <p className="data__item__icons"> <img className="data__item--views" src={Views} alt="Views"></img> {selectedImage.views}</p>
          <p className="data__item__icons"> <img className="data__item--likes" src={Likes} alt="Likes"></img> {selectedImage.likes}</p>
        </div>

      </div>

      <div className="description">
        <p>{selectedImage.description}</p>
      </div>


    </>
  )
}

export default ImageDetails
