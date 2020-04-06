import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import React, { useState, useEffect } from 'react';

import './styles.css';
import api from '../../services/api';

// const item = require('../../assets/item.jpeg');

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [itemsQuantity, setItemsQuantity] = useState([]);

    function handleCartItems() {
        /*var count = 0;
        var separatedItems = [];
        var items = localStorage.getItem('cartItems');

        for (var i = 0; i < items.length; i++) {
            if (i === 0){
                count++;
            } else {
                if (items[i] === items[i - 1]) {
                    count++;
                    console.log("here")
                } else {
                    separatedItems.push([i - 1, count]);

                    count = 1;
                }
            }
        }*/

        return [4, 1];
    }

    /*useEffect(() => {
        var items = [];
        // const quantity = handleCartItems();
        const quantity = [4, 1];
        setItemsQuantity([quantity]);
        
        alert(quantity);

        quantity.forEach(item => {
            api.get('/category', item[0])
            .then(response => {
                items.push(response.data);
            });
        })

        setCartItems(items);
    }, []);*/

    return (
        <div id="cart-container">
            <Header />

            <section id="content">
                <div className="items">
                    <ul>
                        <li>
                            <div className="item">
                                {cartItems.map(cartItem => (
                                    <div>
                                        <section className="info">
                                            <img src={cartItem.imageUrl} alt="" />
                                            
                                            <div>
                                                <p className="descricao">cartItem.description</p>
                                                <p className="detalhe">Size: {cartItem.size}</p>
                                            </div>
                                        </section>

                                        <section className="total">
                                            <div className="quantity">
                                                <button type="button" className="minus">-</button>

                                            <label>{itemsQuantity[cartItems.indexOf(cartItem)]}</label>
                                                
                                                <button type="button" className="plus">+</button>
                                            </div>

                                            <div className="value">
                                                <p className="total-text">Value:</p>
                                                <p className="total-value">cartItem.value</p>
                                            </div>
                                        </section>
                                    </div>
                                ))}
                            </div>
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