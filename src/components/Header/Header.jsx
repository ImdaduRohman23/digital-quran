import React from 'react';
import './header.css';
import kaligrafi from '../../assets/kaligrafi.png'

const Header = () => {
    return (
        <div className="header">
            <div className="header__content">
                <img className='header__content-img' src={kaligrafi} alt="" />
                <h1 className='header__content-name'>Digital Al-Quran</h1>
            </div>
        </div>
    )
}

export default Header
