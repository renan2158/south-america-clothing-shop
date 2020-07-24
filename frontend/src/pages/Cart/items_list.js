import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import './styles.css';

const cookies = new Cookies();

export default class ItemsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            total: 0,
            items: cookies.get('cartItems')
        }

        this.handleQuantity = this.handleQuantity.bind(this);
        this.handleTotalPrice = this.handleTotalPrice.bind(this);
    }

    handleQuantity(obj, increase) {
        const list = this.state.items;

        if (increase) {
            list[list.indexOf(obj)].quantity++;
        } else {
            if (list[list.indexOf(obj)].quantity > 1)
                list[list.indexOf(obj)].quantity--;
        }
        
        this.setState({
            items: list
        });

        cookies.set('cartItems', list, { path: '/' });
    }

    handleTotalPrice() {
        var total = 0;

        this.state.items.forEach(item => {
            total += item.quantity * item.price;
        });

        return total;
    }

    render() {
        return !this.state.items || this.state.items.length === 0
            ? (<div className="no-items">
                    <h1>No items in the cart.</h1>
            </div>)
        
            : (<div>
                <div id="items">
                    <ul className="list-group">
                        {this.state.items.map(item => (
                            <li className="list-group-item list-group-item-action list-item" key={item.id}>
                                <div className="product-info">
                                    <img src={item.imageUrl} alt="" />

                                    <div className="info">
                                        <p className="description">
                                            {item.description}
                                        </p>

                                        <p className="size">
                                            Size: {item.size}
                                        </p>

                                        <p className="unit">
                                            Unit: {Intl.NumberFormat('en-US', {
                                                style: 'currency',
                                                currency: 'USD'
                                            }).format(item.price)}
                                        </p>
                                    </div>
                                </div>

                                <div className="quantity">
                                    <button className="btn btn-primary minus" onClick={() => this.handleQuantity(item, false)}>{'<'}</button>
                                    
                                    <p className="number">
                                        {item.quantity}
                                    </p>

                                    <button className="btn btn-primary plus"  onClick={() => this.handleQuantity(item, true)}>{'>'}</button>
                                </div>

                                <div className="price">
                                    <p>Price:</p>

                                    <p className="value">
                                        {Intl.NumberFormat('en-US', {
                                                style: 'currency',
                                                currency: 'USD'
                                            }).format(item.price * item.quantity)}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="total">
                    <p className="text">Total: &nbsp;</p>
                    <p className="total-value">
                        {Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD'
                        }).format(this.handleTotalPrice())}
                    </p>
                </div>

                <div className="footer">
                    <Link
                        className="btn btn-primary btn-block"
                        to={{
                            pathname: '/checkout',
                            state: {
                                total: this.handleTotalPrice()
                            }
                        }}
                    >
                        Continue to Payment
                    </Link>
                </div>
            </div>
        );
    }
 }