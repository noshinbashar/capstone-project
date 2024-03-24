import { Link } from "react-router-dom"
import "./ImageList.scss"

function ImageList({ Imagelist, selectedImage }) {
    return (
        <>
            <div className="images">
                {/* <p className="title">NEXT IMAGES</p> */}
                <ul className="imagelist">
                    {Imagelist
                        .filter((images) => (images.id) !== selectedImage.id)
                        .map((images) => {
                            return (
                                <Link to={`/${images.id}`} className="link">    {/* adding this className to remove text decoration  */}
                                    <li className="imagelist__item" >
                                        <p><img className="imagelist__images" src={`${images.image}`} alt="image List"></img></p>
                                        {/* <div className="imagelist__info">
                                            <p className="imagelist__title">{images.title}</p>
                                            <p className="imagelist__channel">{images.medium}</p>
                                        </div> */}
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
