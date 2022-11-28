import React from 'react';
import './header.css';
import kaligrafi from '../../assets/kaligrafi.png'

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <img src={kaligrafi} alt="" />
                <h1>Digital Al-Quran</h1>
            </div>
        </div>
    )
}

export default Header
