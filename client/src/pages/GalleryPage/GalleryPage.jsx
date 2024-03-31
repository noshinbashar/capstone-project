import "./GalleryPage.scss";
import Likes from "./../../assets/icons/likes.svg"
import ImageOne from './../../assets/gallery/gallery_1.jpg'
import Imagetwo from './../../assets/gallery/gallery_2.jpg'
import Imagethree from './../../assets/gallery/gallery_3.jpg'
import Imagefour from './../../assets/gallery/gallery_4.jpg'


function GalleryPage() {
    return (
        <>
            <div className="gallery-page">

                {/* ---------------------------- Gallery 1 --------------------------------------- */}
                <div className="gallery-container">

                    <div className="gallery">
                        <div className="gallery__title-box">
                            <div className="gallery__box-one">
                                <p className="gallery__title">The Waiting</p>
                                <p className="gallery__name">By Noah Khan</p>
                            </div>

                            <div className="gallery__box-two">
                                <p className="gallery__medium">Acrylic on canvas</p>
                            </div>
                        </div>

                        <p className="gallery__description">In this painting, there's a mom standing on a hill. She's waiting for her son to come back home. She's looking at a river, and far away, you can see a city.</p>

                        <div className="gallery__container"><img src={ImageOne} alt="Image One" className="gallery__image" /></div>

                        <div className="data">
                            <div className="data__item">
                                <p className="data__interaction"> <img className="data__icons" src={Likes} alt="Likes" />197</p>
                            </div>

                            <div className="data__time"><p>Posted on 4/01/2024</p></div>
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

                            <li className="comment-list">
                                <p className="comment-list__name">Samantha Kim</p>
                                <p className="comment-list__comment">Wow, what a beautiful painting! The way the artist has captured the scene is truly mesmerizing. Good work to the artist for bringing such depth and emotion to the canvas. It's a masterpiece that speaks to the heart!</p>

                                <div className="comment-item">
                                    <div className="comment-item__icon">
                                        <img className="comment-item__like" src={Likes} alt="Like" ></img>
                                        <p className="comment-item__count">5</p>
                                    </div>

                                </div>

                                <p className="list__time">4/02/2024</p>
                                <p className="list__image"></p>

                            </li>

                            <li className="comment-list">
                                <p className="comment-list__name">Sarah Johnson</p>
                                <p className="comment-list__comment">I like how the river adds a sense of movement to the scene, contrasting with the stillness of the mom.</p>

                                <div className="comment-item">
                                    <div className="comment-item__icon">
                                        <img className="comment-item__like" src={Likes} alt="Like" ></img>
                                        <p className="comment-item__count">3</p>
                                    </div>

                                </div>

                                <p className="list__time">4/01/2024</p>
                                <p className="list__image"></p>

                            </li>

                        </ul>

                    </div>

                </div>
                {/* ---------------------------- Gallery 1 --------------------------------------- */}

                {/* ---------------------------- Gallery 2 --------------------------------------- */}
                <div className="gallery-container">

                    <div className="gallery">
                        <div className="gallery__title-box">
                            <div className="gallery__box-one">
                                <p className="gallery__title">Valley Breeze</p>
                                <p className="gallery__name">By Ava Brown</p>
                            </div>

                            <div className="gallery__box-two">
                                <p className="gallery__medium">Acrylic on canvas</p>
                            </div>
                        </div>

                        <p className="gallery__description">Imagine of a quiet village nestled in a valley. You can see tall green grass swaying gently in the wind, and cute little houses all around. The sky above is bright blue with fluffy white clouds. Looking at this painting makes me feel calm and happy, like I am taking a peaceful stroll through the countryside.</p>

                        <div className="gallery__container"><img src={Imagetwo} alt="Image One" className="gallery__image" /></div>

                        <div className="data">
                            <div className="data__item">
                                <p className="data__interaction"> <img className="data__icons" src={Likes} alt="Likes" />213</p>
                            </div>

                            <div className="data__time"><p>Posted on 3/29/2024</p></div>
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

                            <li className="comment-list">
                                <p className="comment-list__name">Ella Green</p>
                                <p className="comment-list__comment">I can almost feel the breeze and hear the rustle of the grass in this painting. It's so calming and inviting!"</p>

                                <div className="comment-item">
                                    <div className="comment-item__icon">
                                        <img className="comment-item__like" src={Likes} alt="Like" ></img>
                                        <p className="comment-item__count">4</p>
                                    </div>

                                </div>

                                <p className="list__time">3/30/2024</p>
                                <p className="list__image"></p>

                            </li>

                            <li className="comment-list">
                                <p className="comment-list__name">Liam Parker</p>
                                <p className="comment-list__comment">What a lovely depiction of a peaceful village scene! The colors and the atmosphere are just perfect.</p>

                                <div className="comment-item">
                                    <div className="comment-item__icon">
                                        <img className="comment-item__like" src={Likes} alt="Like" ></img>
                                        <p className="comment-item__count">5</p>
                                    </div>

                                </div>

                                <p className="list__time">3/29/2024</p>
                                <p className="list__image"></p>

                            </li>

                        </ul>

                    </div>

                </div>
                {/* ---------------------------- Gallery 2 --------------------------------------- */}

                {/* ---------------------------- Gallery 3 --------------------------------------- */}
                <div className="gallery-container">

                    <div className="gallery">
                        <div className="gallery__title-box">
                            <div className="gallery__box-one">
                                <p className="gallery__title">Citrus Symphony</p>
                                <p className="gallery__name">By Emma Carter</p>
                            </div>

                            <div className="gallery__box-two">
                                <p className="gallery__medium">Watercolor on canvas</p>
                            </div>
                        </div>

                        <p className="gallery__description">This painting shows bright oranges and green leaves on a calm white background. It's made with watercolors on canvas, giving it a soft and natural look. The oranges look juicy and the leaves look fresh and lively. The simple white background makes the colors stand out and catch your eye.</p>

                        <div className="gallery__container"><img src={Imagethree} alt="Image One" className="gallery__image" /></div>

                        <div className="data">
                            <div className="data__item">
                                <p className="data__interaction"> <img className="data__icons" src={Likes} alt="Likes" />227</p>
                            </div>

                            <div className="data__time"><p>Posted on 3/28/2024</p></div>
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

                            <li className="comment-list">
                                <p className="comment-list__name">Eva White</p>
                                <p className="comment-list__comment">The colors in this painting are so refreshing! It feels like I can taste the sweet oranges. It's like a breath of fresh air in a picture.</p>

                                <div className="comment-item">
                                    <div className="comment-item__icon">
                                        <img className="comment-item__like" src={Likes} alt="Like" ></img>
                                        <p className="comment-item__count">4</p>
                                    </div>

                                </div>

                                <p className="list__time">3/30/2024</p>
                                <p className="list__image"></p>

                            </li>

                            <li className="comment-list">
                                <p className="comment-list__name">Noah Khan</p>
                                <p className="comment-list__comment">I love how this painting shows nature's beauty in such a graceful way. It's like looking into a calm garden where everything is alive and colorful. It's really amazing!</p>

                                <div className="comment-item">
                                    <div className="comment-item__icon">
                                        <img className="comment-item__like" src={Likes} alt="Like" ></img>
                                        <p className="comment-item__count">5</p>
                                    </div>

                                </div>

                                <p className="list__time">3/28/2024</p>
                                <p className="list__image"></p>

                            </li>

                        </ul>

                    </div>

                </div>
                {/* ---------------------------- Gallery 3 --------------------------------------- */}


                {/* ---------------------------- Gallery 4 --------------------------------------- */}
                <div className="gallery-container">

                    <div className="gallery">
                        <div className="gallery__title-box">
                            <div className="gallery__box-one">
                                <p className="gallery__title">Mountain Creek Serenity</p>
                                <p className="gallery__name">By Emily Smith</p>
                            </div>

                            <div className="gallery__box-two">
                                <p className="gallery__medium">Watercolor on paper</p>
                            </div>
                        </div>

                        <p className="gallery__description">In this painting, you'll see distant mountains towering majestically. A serene creek meanders through rocky terrain, reflecting the beauty of nature. Lush green trees adorn both banks of the creek, adding to the tranquil scene. Painted with watercolors on paper, it captures the peacefulness of the wilderness.</p>

                        <div className="gallery__container"><img src={Imagefour} alt="Image One" className="gallery__image" /></div>

                        <div className="data">
                            <div className="data__item">
                                <p className="data__interaction"> <img className="data__icons" src={Likes} alt="Likes" />117</p>
                            </div>

                            <div className="data__time"><p>Posted on 3/27/2024</p></div>
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

                            <li className="comment-list">
                                <p className="comment-list__name">Grace Turner</p>
                                <p className="comment-list__comment">This painting reminds me of my favorite hiking spot. The mountains in the distance and the bubbling creek create such a serene atmosphere. The colors are so soothing, it's like a visual meditation.</p>

                                <div className="comment-item">
                                    <div className="comment-item__icon">
                                        <img className="comment-item__like" src={Likes} alt="Like" ></img>
                                        <p className="comment-item__count">6</p>
                                    </div>

                                </div>

                                <p className="list__time">3/28/2024</p>
                                <p className="list__image"></p>

                            </li>

                        </ul>

                    </div>

                </div>
                {/* ---------------------------- Gallery 4 --------------------------------------- */}




            </div>

        </>
    );
}

export default GalleryPage;