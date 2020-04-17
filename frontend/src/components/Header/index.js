import React, { useState } from 'react';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

const logoImg = require('../../assets/logo-black.png');

export default function Header() {
    const [searching, setSearching] = useState(false);

    return (
        <div className="header-container">
            <div className="header">
                <Link to="/">
                    <img id="logo" src={logoImg} alt="South America Logo" />
                </Link>

                <div id="menus">
                    <Link className="menu" to={{
                        pathname: '/gallery',
                        state: {
                            gender: "male",
                            searching: searching
                        }
                    }}>
                        MEN
                    </Link>
                    
                    <Link className="menu" to={{
                        pathname: '/gallery',
                        state: {
                            gender: "female",
                            searching: searching
                        }
                    }}>
                        WOMEN
                    </Link>

                    <Link className="menu" to="/contact">CONTACT</Link>
                    <Link className="menu" to="/about">ABOUT US</Link>
                </div>

                <div id="actions">
                    <div className="search">
                        <button
                            className="search-button"
                            type="button"
                            onClick={() => setSearching(true)}
                        >
                            <FiSearch size={25} color="#121212" />
                        </button>
                    </div>

                    <Link to="/cart">
                        <FiShoppingBag size={25} color="#121212" />
                    </Link>
                </div>
            </div>
        </div>
    );
}