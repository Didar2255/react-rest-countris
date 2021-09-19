import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div >
            <nav className='manu-bar'>
                <a href="/home">Home</a>
                <a href="/home">About Us</a>
                <a href="/home">Contact Us</a>
                
            </nav>
        </div>
    );
};

export default Header;