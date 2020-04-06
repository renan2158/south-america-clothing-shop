import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';

import api from '../../services/api';

import './styles.css';

const coat = require('../../assets/coat.svg');
const pants = require('../../assets/pants.svg');
const shoes = require('../../assets/shoes.svg');
const tshirt = require('../../assets/tshirt.svg');

export default function Gallery() {
    const [items, setItems] = useState([]);

    async function handleGridItems(category) {
        const gender = localStorage.getItem('itemsGender');

        if (category) {
            api.post('category', {
                gender,
                category
            })
            .then(response => {
                setItems(response.data);
            });
        } else {
            api.post(`items/${localStorage.getItem('itemsGender')}`)
            .then(response => {
                setItems(response.data);
            });
        }
    }

    useEffect(() => {
        handleGridItems();
    }, []);

    function handleItem(id) {
        if (!localStorage.getItem('cartItems')) {
            const items = [];

            items.push(id);

            localStorage.setItem('cartItems', items);
        } else {
            const items = [localStorage.getItem('cartItems')];

            items.push(id);
            items.sort();

            alert(items);

            localStorage.setItem('cartItems', items);
        }
    }

    return (
        <div id="gallery-container">
            <Header />

            <div id="content">
                <section id="categories">
                    <button type="button" className="category" onClick={() => handleGridItems('tshirts')}>
                        <p>T-SHIRTS</p>
                        <img src={tshirt} alt="" />
                    </button>

                    <button type="button" className="category" onClick={() => handleGridItems('coats')}>
                        <p>COATS</p>
                        <img src={coat} alt="" />
                    </button>

                    <button type="button" className="category" onClick={() => handleGridItems('pants')}>
                        <p>PANTS</p>
                        <img src={pants} alt="" />
                    </button>

                    <button type="button" className="category" onClick={() => handleGridItems('shoes')}>
                        <p>SHOES</p>
                        <img src={shoes} alt="" />
                    </button>
                </section>

                <section id="feed">
                    <ul className="grid">
                        {items.map(item => (
                            <li className="card" key={item.id} onClick={() => handleItem(item.id)}>
                                <div className="image">
                                    <img src={item.imageUrl} alt="" />
                                </div>

                                <p className="item">
                                    {item.description}
                                </p>

                                <p className="price">
                                    {item.price}
                                </p>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}