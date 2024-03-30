import "./GalleryPage.scss";
import ImageOne from './../../assets/gallery/gallery_0.jpg'
import Likes from "./../../assets/icons/likes.svg"

function GalleryPage() {
    return (
        <>
            <div className="gallery-page">

                <div className="gallery">

                    <p className="gallery__title">The Waiting</p>

                    <p className="gallery__medium">Acrylic on canvas</p>

                    <div className="gallery__name"><p>Jone Doe</p></div>

                    <p className="gallery__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, maiores nesciunt? Dolore quae, adipisci dolores quos qui amet explicabo eligendi voluptatum sint tempore possimus sed aspernatur, ducimus ex quo perferendis!</p>

                    <div className="gallery__container"><img src={ImageOne} alt="Image One" className="gallery__image" /></div>

                    <div className="data">
                        <div className="data__item">
                            <p className="data__interaction"> <img className="data__icons" src={Likes} alt="Likes" /></p>
                        </div>

                        <div className="data__time"><p>Posted on 3/15/2024</p></div>
                    </div>

                </div>

                <div className="galleryComment">

                    <form className="galleryComment__box">
                        <div className="galleryComment__input">
                            <input className="galleryComment__text-input" type="text" placeholder="Share your thoughts . . ." />
                        </div>

                        <div>
                            <p className="galleryComment__button">
                                <button className="galleryComment__btn" type="submit">COMMENT</button>
                            </p>
                        </div>

                    </form>

                </div>

                <div className="gallery-comments">
                    <ul className="comments__box">

                        <li className="list">
                            <p className="list__name">Noshin Bashar</p>
                            <p className="list__comment">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque iure odio incidunt suscipit voluptas id dignissimos facilis inventore, accusantium repellat ad praesentium excepturi optio voluptatem laboriosam, voluptates ipsam fuga iusto.</p>

                            <div className="comment-item">
                                <div className="comment-item__icon">
                                    <img className="comment-item__like" src={Likes} alt="Like" ></img>
                                    <p className="comment-item__count">3</p>
                                </div>

                            </div>

                            <p className="list__time">3/19/2024</p>
                            <p className="list__image"></p>

                        </li>

                    </ul>

                </div>
            </div >

        </>
    );
}

export default GalleryPage;