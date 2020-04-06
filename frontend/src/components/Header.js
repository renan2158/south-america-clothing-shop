import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';

import './styles.css';

const logoImg = require('../assets/logo-black.png');

export default function Header() {

    function handleGender(gender) {
        localStorage.setItem('itemsGender', gender);
        localStorage.setItem('itemsCategory', 'tshirts');
    }

    return (
        <div className="header-container">
            <div className="header">
                <Link to="/">
                    <img id="logo" src={logoImg} alt="South America Logo" />
                </Link>

                <section id="menus">
                    <a className="menu" href="/gallery" onClick={() => handleGender('male')}>MEN</a>
                    <a className="menu" href="/gallery" onClick={() => handleGender('female')}>WOMEN</a>
                    <Link className="menu" to="/contact">CONTACT</Link>
                    <Link className="menu" to="/about">ABOUT US</Link>
                </section>

                <section id="actions">
                    <div className="search">
                        <input placeholder="Search" type="text" name="search" />
                        
                        <a href="/">
                            <FiSearch size={25} color="#a0a0a0" />
                        </a>
                    </div>

                    <a href="/cart">
                        <FiShoppingBag size={25} color="#121212" />
                    </a>
                </section>
            </div>
        </div>
    );
}