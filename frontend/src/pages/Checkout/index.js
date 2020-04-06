import React from 'react';
import { Link } from 'react-router-dom'
import CheckoutForm from './CheckoutForm';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import './styles.css';

const logoImg = require('../../assets/logo-black.png');
const stripePromise = loadStripe("pk_test_XcnTpw5mY7Pky71egyLivdBc00UkVLgoWF");

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
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </section>
        </div>
    );
}