import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import Header from '../../pages/Cart/index';

import './styles.css';

const item = require('../../assets/item.jpeg');

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);

    function handleCartItems() {
        var count = 0;
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
        }

        return separatedItems;
    }

    /*useEffect(() => {
        var items = [];
        const list = handleCartItems();

        list.forEach((item) => {
            api.get(`items/${[item]}`)
            .then(response => {
                console.log(response.data);
                items.push([response.data, item[1]]);
            });
        });

        setCartItems(items);
    }, []);*/

    return (
        <div id="cart-container">
            <Header />

            <section className="list">
                <ul>
                    <li>
                        <div className="item">
                            <section className="info">
                                <img src={item} alt="" />
                                
                                <div>
                                    <p>Descrição do produto..........................</p>
                                    <p className="valor">R$ 200,00</p>

                                    <div className="quantity">
                                        <button type="button" className="minus">{"<"}</button>
                                        <label>2</label>
                                        <button type="button" className="plus">{">"}</button>
                                    </div>
                                </div>
                            </section>

                            <section className="total">
                                <p className="total">Total</p>
                                <p className="total-value">R$500,00</p>
                            </section>
                        </div>
                    </li>
                </ul>
            </section>

            <Link className="checkout" to="/checkout">
                Proceed to checkout
            </Link>
        </div>
    );
}