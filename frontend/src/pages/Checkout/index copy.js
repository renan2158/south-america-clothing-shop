import React from 'react';
import { Link } from 'react-router-dom'
import CheckoutForm from './CheckoutForm';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const logoImg = require('../../assets/logo-black.png');
const stripePromise = loadStripe("pk_test_XcnTpw5mY7Pky71egyLivdBc00UkVLgoWF");

export default function Checkout() {
    return (
        <div className="checkout-container">
            <header>
                <Link to="/">
                    <img id="logo" src={logoImg} alt="South America Logo" />
                </Link>
            </header>

            <section className="content">
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </section>
        </div>
    );
}