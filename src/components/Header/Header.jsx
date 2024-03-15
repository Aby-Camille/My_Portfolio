import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import '../Header/Header.scss';
import { Link } from 'react-scroll';


function Header () {

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
            <NavLink to='/' spy={true} smooth={true} offset={0} duration={500}><h1 className='header-name'>Portfolio</h1></NavLink>
                <div className='hamburger' onClick={handleClick}>   
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="about" spy={true} smooth={true} offset={-100} duration={500} id="about-link" className="header-link">A Propos</Link>
                    </li>
                    <li className='nav-item'>
                        <a href='#projects' >Mes Projets</a>
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
}
export default Header;