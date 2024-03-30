import "./LogoPage.scss";
import Image from "./../../assets/Images/undraw_art_re_vj2w.svg"
import Canvas from "./../../assets/Images/undraw_Making_art_re_ee8w.png"
import Logo from "./../../assets/Images/Brush.png"
import { Link } from "react-router-dom";

function LogoPage() {
    return (
        <>
            <div className="logopage">
                <div className="logoBox">
                    <div className="logoBox__container">
                        <img className="logoBox__image" src={Logo} alt="Logo" />
                        <p className="logoBox__text">Where Art Comes Alive</p>
                    </div>

                </div>


                <div className="imageBox">
                    <div className="container">
                        <img className="container__image-one" src={Image} alt="Image" />
                        <img className="container__image-two" src={Canvas} alt="Image" />
                    </div>

                </div>

                <div>
                    <div className="logoButton">
                        <Link to="/about">
                            <button className="logoButton__btn">Learn More</button>
                        </Link>
                    </div>
                </div>

            </div>

        </>
    );
}

export default LogoPage;