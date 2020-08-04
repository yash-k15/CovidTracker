import React from "react";
import './Nav.css';
import { Link } from "react-router-dom";


function Nav() {
    return (
        <div className="nav">
            <ul className="navLinks">
                <Link style={{ color: "white", textDecoration: "none" }} to="/"><li>Home</li></Link>
                <Link style={{ color: "white", textDecoration: "none" }} to="/map"><li>Map</li></Link>
                <Link style={{ color: "white", textDecoration: "none" }} to="/symptoms"><li>Symptoms</li></Link>
                <Link style={{ color: "white", textDecoration: "none" }} to="/messageboard"><li>Blogs</li></Link>
            </ul>
        </div>
    );
}

export default Nav;