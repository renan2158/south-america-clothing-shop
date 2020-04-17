import { Link } from 'react-router-dom';
import Header from '../../components/Header/index';
import React, { useState, useEffect } from 'react';

import './styles.css';
import api from '../../services/api';

// const item = require('../../assets/item.jpeg');

export default function Cart() {
    const [quantity, setQuantity] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    function handleItemsQuantity() {
        var count = 0;
        var separatedItems = [];
        const items = localStorage.getItem('cartItems').split(',');

        // console.log(items);

        for (var i = 0; i < items.length; i++) {
            count++;

            if (items[i] !== items[i + 1]) {
                separatedItems.push([Number.parseInt(items[i]), count]);
                count = 0;
            }
        }

        return separatedItems;
    }

    useEffect(() => {
        const items = handleItemsQuantity();

        var quantity = [];
        var cartItems = [];

        items.forEach(async (item) => {
            const response = await api.post(`cart_item/${item[0]}`);

            const data = {
                quantity: item[1],
                data: JSON.stringify(response.data)
            }

            quantity.push(item[1]);
            cartItems.push(JSON.stringify(response.data));
        });

        alert(cartItems);

        setQuantity(quantity);
        setCartItems(cartItems);
    }, []);

    return (
        <div id="cart-container">
            <Header />

            <section id="content">
                <div className="items">
                    <ul>
                        <li>
                            {cartItems.map(item => (
                                <div className="item">
                                    <section className="info">
                                        <img src={item} alt="" />
                                        
                                        <div>
                                            <p className="descricao">item[0].description</p>
                                            <p className="detail">Size: {item[0].size}</p>
                                        </div>
                                    </section>
    
                                    <section className="total">
                                        <div className="quantity">
                                            <button type="button" className="minus">-</button>
    
                                            <label>item[1]</label>
                                            
                                            <button type="button" className="plus">+</button>
                                        </div>
    
                                        <div className="value">
                                            <p className="total-text">Value:</p>
                                            <p className="total-value">item[0].value</p>
                                        </div>
                                    </section>
                                </div>
                            ))}
                        </li>
                    </ul>
                </div>

                <div className="payment">
                    <Link to="/checkout">Continue to Payment</Link>
                </div>
            </section>
        </div>
    );
}