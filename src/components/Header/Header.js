import React from 'react'
import './Header.css'
import catsa from './catsa.webp'


const Header = () => {
    return (
        <div className="header-container">
            <img src={catsa} alt="nasalogo" width="400px"  ></img>
        </div>
    )
}

export default Header
