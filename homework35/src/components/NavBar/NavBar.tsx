import React from 'react';
import './NavBar.css'

const NavBar = () => {
    return (
        <nav id="menuVertical" className='nav-bar'>
            <ul>
                <li><a href="#1">News</a></li>
                <li><a href="#2">Statistics</a></li>
                <li><a href="#3">What Is React?</a></li>
                <li><a href="#4">Props</a></li>
                <li><a href="#5">Component</a></li>
            </ul>
        </nav>
    )
}
export default NavBar;