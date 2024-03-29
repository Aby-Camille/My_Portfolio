import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import i18n from '../../i18n';
import { useTranslation } from 'react-i18next'

import '../Header/Header.scss';

export default function Header () {
    const { t } = useTranslation();

    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

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

// i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
    const chooseLanguage = (e) => {
        e.preventDefault();
        i18n.changeLanguage(e.target.value);
        setSelectedLanguage(e.target.value);
    }

    window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <nav className='navbar'>
            <NavLink to='/'><h1 className='header-name'>Portfolio</h1></NavLink>
                <div className='nav-scroll' onClick={handleClick}>   
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <HashLink smooth to="/#about" id="about-link" className="header-link">{ t('nav.about') }</HashLink>
                    </li>
                    <li className='nav-item'>
                    <HashLink smooth to="/#my-projects" id="projects-link" className="header-link">{ t('nav.projects') }</HashLink>
                    </li>
                    <li className='nav-item'>
                    <HashLink smooth to="/#my-skills" id="skills-link" className="header-link">{ t('nav.skills') }</HashLink>
                    </li>
                    <li className='nav-item'>
                        <label className='label-icon'>
                        <FontAwesomeIcon icon={faAngleRight} id="arrow-right" />
                        <select name="languages" id="lang" className='select-lng' aria-label="select-lng" defaultValue={selectedLanguage} onChange={chooseLanguage}>
                            <option value="fr" className='icon-lng'>Français</option>
                            <option value="en" className='icon-lng'>English</option>
                            <option value="zh" className='icon-lng'>汉语</option>
                        </select>
                        <FontAwesomeIcon icon={faAngleLeft} id="arrow-left" />
                        </label>
                    </li>
                </ul>
            </nav>
        </div>
    )
};