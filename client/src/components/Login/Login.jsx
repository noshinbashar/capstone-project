import "./Login.scss";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showRegister, setShowRegister] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const toggleRegister = () => {
        setShowRegister(!showRegister); // Toggle the visibility of the register section
    };

    return (
        <>
            <div className="login-form-container">

                <form onSubmit={handleSubmit} className="login-form">
                    <p className="login-title">Log in to explore the world of art</p>
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
                    <Link to="/logopage">
                        <button type="submit" className="submit-btn">
                            Login
                        </button>
                    </Link>
                    <p className="register-text">New to our community? <span className="span-text" onClick={toggleRegister}>Register here</span></p>

                    <div className={`register ${showRegister ? 'active' : ''}`}>
                        <p className="register-title">Register</p>
                        <div className="register-item">
                            <label className="label">Username:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="input-field"
                                required
                            />
                        </div>
                        <div className="register-item">
                            <label className="label">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="input-field"
                                required
                            />
                        </div>
                        <div className="register-item">
                            <label className="label">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="input-field"
                                required
                            />
                        </div>
                        <div className="register-item">
                            <label className="label">Confirm Password:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className="input-field"
                                required
                            />
                        </div>
                        <button className="submit-btn" type="submit">Register</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Login