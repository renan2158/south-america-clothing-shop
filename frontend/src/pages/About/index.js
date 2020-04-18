import React from 'react';

import Header from '../../components/Header/index';

import './styles.css';

export default function About() {
    return (
        <div id="about-container">
            <Header />

            <div className="about">
                <h1>Who are we?</h1>

                <div className="card">
                    <p>
                        The South America Clothing Shop was created in 1986 in San Francisco, CA.<br/>
                        We are known for our quality and our fine products. We always try to offer<br/>
                        the best products to our clients. Come visit us, we're waiting for you.
                    </p>
                </div>
            </div>
        </div>
    );
}