import "./MyGallery.scss"
import SelectedImage from "../../components/SelectedImage/SelectedImage";
import ImageDetails from "../../components/ImageDetails/ImageDetails";
import NewComment from "../../components/Newcomment/Newcomment";
import Comments from "../../components/Comments/Comments";
import ImageList from "../../components/ImageList/ImageList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"


function MyGallery() {
  const [selectedImage, setSelectedImage] = useState([]);
  const [imagelist, setImagelist] = useState([]);
  const defaultImageId = "0"
  const params = useParams();
  const [imageComments, setImageComments] = useState([])
  // const imageURL = process.env.backendURL;

  // console.log(imageURL)

  useEffect(() => {
    async function getImageList() {
      const response = await axios.get("http://localhost:8080/images/")
      console.log(response.data)
      setImagelist(response.data)
    }
    getImageList()
  }, [])

  async function getSelectedImage(imageId) {
    const response = await axios.get(`http://localhost:8080/images/${imageId}`)
    console.log(response.data)
    setSelectedImage(response.data)  //updating the selectedImage state using setselectedImage  
    setImageComments(response.data.comments)
  }

  useEffect(() => {
    if (params.id) {
      console.log(params.id); // this is coming from the url for the route /:id 
      getSelectedImage(params.id);
    } else {
      getSelectedImage(defaultImageId);
    }
  }, [params]);

  //Post comment
  const postComment = async (comment) => {
    console.log(comment)
    try {
      const commentsResponse = await axios.post(`http://localhost:8080/images/${selectedImage.id}/comments`, comment);
      console.log(commentsResponse)
      setImageComments([...imageComments, commentsResponse.data])
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  //Delete comment
  async function deleteComment(commentId) {
    try {
      await axios.delete(`http://localhost:8080/images/${selectedImage.id}/comments/${commentId}`);
      setImageComments(prevComments => prevComments.filter(comment => comment.id !== commentId));
      console.log("Comment deleted successfully.");
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  }


  return (
    <>
      <div className="App">

        <div className="mainpage">
          <div className="itemone">
            <SelectedImage selectedImage={selectedImage.image} />
            <ImageDetails selectedImage={selectedImage} />
            <NewComment selectedImage={selectedImage} postComment={postComment} />
            <Comments Comments={imageComments} deleteComment={deleteComment} />
          </div>

          <div className="itemtwo">
            <ImageList Imagelist={imagelist}
              selectedImage={selectedImage} />
          </div>
        </div>

      </div>
    </>
  )
}

export default MyGallery