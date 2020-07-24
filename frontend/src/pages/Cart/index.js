import React, { Component } from 'react';

import ItemsList from './items_list';
import Header from '../../components/Header/index';

import './styles.css';

export default class Cart extends Component {

    render() {
        return (
            <div id="cart-container">
                <Header />

                <section id="content">
                    <ItemsList />
                </section>
            </div>
        );
    }
}