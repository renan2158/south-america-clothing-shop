import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaShoppingBag } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

const logoImg = require('../../assets/logo-black.png');

export default function Header() {
    const history = useHistory();
    const [search, setSearch] = useState('');

    return (
        <div className="header-container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-brand">
                    <img id="logo" src={logoImg} alt="South America Logo" />
                </div>

                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active" >
                            <Link
                                className="nav-link"
                                to="/"
                            >
                                Home
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        
                        <li className="nav-item" >
                            <Link
                                className="nav-link"
                                to={{
                                    pathname: '/gallery',
                                    state: {
                                        gender: "male",
                                        search: null
                                    }
                                }}
                            >
                                Men
                            </Link>
                        </li>
                        
                        <li className="nav-item" >
                            <Link
                                className="nav-link"
                                to={{
                                    pathname: '/gallery',
                                    state: {
                                        gender: "female",
                                        search: null
                                    }
                                }}
                            >
                                Women
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/contact"
                            >
                                Contact
                        </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/about-us"
                            >
                                About Us
                            </Link>
                        </li>
                    </ul>

                    <form className="form-inline my-2 my-lg-0">
                        <input
                            className="form-control mr-sm-2"
                            type="text"
                            placeholder="Search"
                            onChange={e => setSearch(e.target.value)}
                        />
                        
                        <Link
                            className="btn btn-secondary my-2 my-sm-0"
                            to={{
                                pathname: '/gallery',
                                state: {
                                    search: search
                                }
                            }}
                        >
                            <FiSearch color="#000" size={'1.5rem'} />
                        </Link>
                    </form>

                    <button
                        className="btn btn-primary"
                        onClick={() => history.push('/cart')}
                    >
                        <FaShoppingBag color="#FFF" size={'1.5rem'} />
                    </button>
                </div>
            </nav>

            {/* <div className="header">
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
            </div> */}
        </div>
    );
}