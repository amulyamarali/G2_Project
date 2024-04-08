import React from 'react';
import logo from "../assets/image.png";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div style={{ display: 'flex', alignItems: 'center'}}>
            <div>
                <Link to="/">
                    <img src={logo} alt="Logo" style={{ height: '40px', width: '40px', padding: '10px' }} />
                </Link>
            </div>
            <div style={{ marginRight: '20px' }}>
                <Link to='/features' className="custom-link">
                    <div className="title">
                        <h2>Features</h2>
                    </div>
                </Link>
            </div>
            <div style={{ marginRight: '20px' }}>
                <Link to='/chatbot' className="custom-link">
                    <div className="title">
                        <h2>ChatBot</h2>
                    </div>
                </Link>
            </div>
            <div style={{ marginRight: '20px' }}>
                <Link to='/analysis' className="custom-link">
                    <div className="title">
                        <h2>Analysis</h2>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default NavBar