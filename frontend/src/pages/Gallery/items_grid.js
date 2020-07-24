import React, { Component } from 'react';
import Cookies from 'universal-cookie';

import api from '../../services/api';

import './styles.css';

const cookies = new Cookies();

export default class ItemsGrid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }

        this.handleApi = this.handleApi.bind(this);
        this.handleItem = this.handleItem.bind(this);
    }

    async componentDidMount() {
        await this.handleApi();
    }

    async componentDidUpdate(prevProps) {
        if (this.props.search !== prevProps.search ||
            this.props.gender !== prevProps.gender ||
            this.props.category !== prevProps.category) {
            
            await this.handleApi();
        }
    }

    handleItem(item) {
        var items = [];
        var equal = false;

        if (!cookies.get('cartItems')) {
            const object = {
                id: item.id,
                imageUrl: item.imageUrl,
                description: item.description,
                size: item.size,
                category: item.category,
                gender: item.gender,
                price: item.price,
                quantity: 1
            }

            items = [object];
        } else {
            items = cookies.get('cartItems');

            items.forEach(each => {
                if (each.id === item.id) {
                    each.quantity++;

                    equal = true;

                    return;
                }
            });

            if (!equal) {
                const object = {
                    id: item.id,
                    imageUrl: item.imageUrl,
                    description: item.description,
                    size: item.size,
                    category: item.category,
                    gender: item.gender,
                    price: item.price,
                    quantity: 1
                }

                items.push(object);
            }
        }

        cookies.set('cartItems', items, { path: '/' });
    }

    async handleApi() {
        if (this.props.search) {
            const data = {
                search: this.props.search
            };
            
            const response = await api.post('search', data);

            this.setState({
                items: response.data
            });
        } else {
            if (this.props.category === null) {
                const data = {
                    gender: this.props.gender
                };
    
                const response = await api.post('gallery', data);
    
                this.setState({
                    items: response.data
                });
            } else {
                const data = {
                    gender: this.props.gender,
                    category: this.props.category
                };
    
                const response = await api.post('category', data);
    
                this.setState({
                    items: response.data
                });
            }
        }
    }

    render() {
        return this.state.items.length === 0
            ? (<div className="loading-container">
                No results found.
            </div>)
            
            : (<div id="feed">
                <ul className="grid">
                    {this.state.items.map(item => (
                        <li className="card" key={item.id} onClick={() => this.handleItem(item)}>
                            <div className="image">
                                <img src={item.imageUrl} alt="" />
                            </div>

                            <p className="item">
                                {item.description}
                            </p>

                            <p className="price">
                                {Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'USD'
                                }).format(item.price)}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}