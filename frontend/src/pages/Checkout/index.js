import React from 'react';
import Payment from '../../components/Payment/index';

import './styles.css';

const logoImg = require('../../assets/horizontal-logo.png');

export default function Checkout(props){

    return (
        <div id="checkout-container">
            <header>
                <div className="image">
                    <img id="logo" src={logoImg} alt="South America Logo" />
                </div>
            </header>

            <section className="body">
                <h1>Checkout</h1>

                <div className="checkout">
                    <Payment value={props.location.state['total']} />
                </div>
            </section>
        </div>
    );
}