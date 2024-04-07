import React from 'react'
import NavBar from './NavBar';  

import { Link } from "react-router-dom";


function Landing() {
    return (
        <div>
            {/* <NavBar /> */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100vh'}}>
                <h1>This is the landing page</h1>
            </div>
        </div>
    )
}

export default Landing
