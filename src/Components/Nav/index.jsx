import React, { useState } from 'react';
import './Nav.css';
import logo from '/public/images/logo-secundaria.png';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return( 
        <>
            <section className='nav'>
                <div className='nav-image'>
                    <a href='#home'><img src={logo} alt="Logo"/></a> 
                </div>

                <div className='nav-text'>
                    <a href='#about'>Sobre mim</a>
                    <a href='#lp'>Landing Page</a>
                    <a href='#portifolio'>Portifólio</a>
                    <a href='#contactt'>Contato</a>
                </div>

                <div className='contact-button'>
                    <a href="https://wa.me/5541998870232?text=Ol%C3%A1%20Emerson,%20gostaria%20de%20saber%20mais%20sobre%20uma%20Landing%20Page!" target='__blank'><button>Inicie agora!</button></a>
                </div>
            </section>

            {menuOpen && (
                <div className="menu-overlay" onClick={toggleMenu}>
                    <div className="menu">
                        <a href='#home'>Início</a>
                        <a href='#about'>Sobre mim</a>
                        <a href='#lp'>Landing Page</a>
                        <a href='#portifolio'>Portifólio</a>
                        <a href='#contactt'>Contato</a>
                    </div>
                </div>
            )}

            <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </>
    );
}

export default Nav;
