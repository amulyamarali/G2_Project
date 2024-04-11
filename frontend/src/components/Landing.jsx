import React from 'react'
import NavBar from './NavBar';  

import { Link } from "react-router-dom";


function Landing() {
    return (
        <div>
            {/* <NavBar /> */}
            <div className="flex flex-col items-center justify-start h-screen">
                {/* <NavBar /> */}
                <h1>Welcome to G2 Marketing Solutions</h1>
            </div>
        </div>
    )
}

export default Landing
