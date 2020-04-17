import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import ItemsList from './items_list';
import Header from '../../components/Header/index';

import api from '../../services/api';

import './styles.css';

export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }

        this.separateItems = this.separateItems.bind(this);
        this.handleCartItems = this.handleCartItems.bind(this);
    }

    componentDidMount() {
        this.handleCartItems();
    }

    separateItems() {
        var count = 0;
        var separatedItems = [];
        const items = localStorage.getItem('cartItems').split(',');
        

        for (var i = 0; i < items.length; i++) {
            count++;

            if (items[i] !== items[i + 1] || items.length === 1) {
                separatedItems.push([items[i], count]);

                count = 0;
            }
        }
        
        return separatedItems;
    }
    
    handleCartItems() {
        var cartItems = [];
        const separatedItems = this.separateItems();

        separatedItems.forEach(async (item) => {
            var itemAttributes = [];
            const response = await api.post(`cart_item/${item[0]}`);

            itemAttributes.push(response.data.id);
            itemAttributes.push(response.data.imageUrl);
            itemAttributes.push(response.data.description);
            itemAttributes.push(response.data.size);
            itemAttributes.push(response.data.price);
            itemAttributes.push(response.data.gender);
            itemAttributes.push(item[1]);

            cartItems.push(itemAttributes);
        });

        this.setState({
            items: cartItems
        });
    }

    render() {
        return (
            <div id="cart-container">
                <Header />

                <section id="content">
                    <ItemsList
                        items={this.state.items}
                    />

                    <div className="payment">
                        <Link to="/checkout">Continue to Payment</Link>
                    </div>
                </section>
            </div>
        );
    }
}