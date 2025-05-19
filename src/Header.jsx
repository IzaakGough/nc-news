import React from "react";
import {Routes, Route, Link} from "react-router-dom"

function Header() {
    return (
        <header>
            <nav className="navbar">
                <Link to="/articles">
                Articles
                </Link>
                
            </nav>
        </header>
    )
}

export default Header