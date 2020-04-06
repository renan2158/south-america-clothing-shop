import React from 'react';
import { Link } from 'react-router-dom';
import Payment from '../../components/Payment/index';

import './styles.css';

const logoImg = require('../../assets/logo-black.png');

export default function Checkout(){
    return (
        <div id="checkout-container">
            <header>
                <div className="image">
                    <Link to="/">
                        <img id="logo" src={logoImg} alt="South America Logo" />
                    </Link>
                </div>

                <div className="cancel">
                    <Link to="/cart">
                        Cancel checkout
                    </Link>
                </div>
            </header>

            <section className="body">
                <div className="checkout">
                    <Payment />
                </div>
            </section>
        </div>
    );
}