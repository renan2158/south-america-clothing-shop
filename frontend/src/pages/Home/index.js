import React from 'react';
import Header from '../../components/Header/index';

import './styles.css';

const homeImg = require('../../assets/home.jpeg');

export default function Home() {
    return  (
        <div id="home-container">
            <Header />

            <div className="content">
                <img src={homeImg} alt="" />
            </div>
        </div>
    );
}