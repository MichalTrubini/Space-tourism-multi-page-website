import React, { Component } from 'react';
import logo from '../assets/shared/logo.svg';
import hamburger from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg';

class Header extends React.Component {
    render() { 
        return <>
                <header className="header">
                    <nav className='nav'>
                        <div className="nav__logo-container">
                            <img src={logo} alt="Space tourism app" className="nav__logo" />
                        </div>
                        <div className="nav__list-container">
                            <img src={close} alt="close menu" className="nav__list-icon" />
                            <ul className="nav__list">
                                <li className="nav__list-item"><span className="nav__number">00</span> Home</li>
                                <li className="nav__list-item"><span className="nav__number">01</span> Destination</li>
                                <li className="nav__list-item"><span className="nav__number">02</span> Crew</li>
                                <li className="nav__list-item"><span className="nav__number">03</span> Technology</li>
                            </ul>
                        </div>
                        <div className='nav__hamburger-icon'>
                            <img src={hamburger} alt="hamburger" className="nav__hamburger" />
                        </div>
                    </nav>
                </header>
               </>;
    }
}
 
export default Header;