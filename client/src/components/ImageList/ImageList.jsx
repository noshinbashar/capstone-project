import { Link } from "react-router-dom"
import "./ImageList.scss"

function ImageList({ Imagelist, selectedImage }) {
    return (
        <>
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

        </>
    )
}

export default ImageList
