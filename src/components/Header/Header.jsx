import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import '../Header/Header.scss';
import { HashLink } from 'react-router-hash-link';


export default function Header () {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    //scrolling header with background fading
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }    
    }

    window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <nav className='navbar'>
            <NavLink to='/'><h1 className='header-name'>Portfolio</h1></NavLink>
                <div className='hamburger' onClick={handleClick}>   
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <HashLink smooth to="/#about" id="about-link" className="header-link">A Propos</HashLink>
                    </li>
                    <li className='nav-item'>
                    <HashLink smooth to="/#projects" id="arrow-down" className="arrow-down-link">Mes Projets</HashLink>
                    </li>
                    <li className='nav-item'>
                        <a href='#skills' >Experience</a>
                    </li>
                    <li className='nav-item'>
                        <a href='languages'>Langues</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
};