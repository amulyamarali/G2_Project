import React from 'react';
import logo from "../assets/image.png";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div style={{ display: 'flex', alignItems: 'center'}}>
            <div>
                <Link to="/">
                    <img src={logo} alt="Logo" className="h-10 w-10 p-2" />
                </Link>
            </div>
            <div className="mr-5">
                <Link to='/features' className="custom-link">
                    <div className="title">
                        <h2 className="text-lg">Features</h2>
                    </div>
                </Link>
            </div>
            <div className="mr-5">
                <Link to='/chatbot' className="custom-link">
                    <div className="title">
                        <h2 className="text-lg">ChatBot</h2>
                    </div>
                </Link>
            </div>
            <div className="mr-5">
                <Link to='/analysis' className="custom-link">
                    <div className="title">
                        <h2 className="text-lg">Analysis</h2>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default NavBar