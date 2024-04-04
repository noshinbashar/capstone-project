import "./Login.scss";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <div className="login-form-container">

                <form onSubmit={handleSubmit} className="login-form">
                    <p className="login-title">Please log in to enter My Gallery</p>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={handleUsernameChange}
                        className="input-field"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="input-field"
                    />
                    <Link to="/mygallery">
                        <button type="submit" className="submit-btn">
                            Login
                        </button>
                    </Link>
                    <p className="register-title">New to our community? Register here</p>
                </form>
            </div>
        </>
    )
}

export default Login