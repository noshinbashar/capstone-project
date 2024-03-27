import "./Header.scss";
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <p> <Link to="/">logo</Link></p>
                </div>

                <div className="pages">
                    <p> <NavLink to="/about">About</NavLink></p>
                    <p> <NavLink to="/gallery">Gallery</NavLink></p>
                    <p> <NavLink to="/mygallery">My Gallery</NavLink></p>
                </div>
            </div>

        </>
    );
}

export default Header;
