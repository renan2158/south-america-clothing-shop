import React, { Component } from 'react';
import { WaveTopBottomLoading } from 'react-loadingg';

import api from '../../services/api';

import './styles.css';

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

    handleItem(id) {
        if (!localStorage.getItem('cartItems')) {
            localStorage.setItem('cartItems', id);
        } else {
            var itemsList = [];
            const items = [localStorage.getItem('cartItems')];

            itemsList = [...items, id];

            localStorage.setItem('cartItems', itemsList.sort());
        }
    }

    async handleApi() {
        if (this.props.search !== null) {
            const data = {
                gender: this.props.gender,
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
                <WaveTopBottomLoading color="#121212" />
            </div>)
            
            : (<div id="feed">
                <div className="grid">
                    {this.state.items.map(item => (
                        <li className="card" key={item.id} onClick={() => this.handleItem(item.id)}>
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
                </div>
            </div>
        );
    }
}