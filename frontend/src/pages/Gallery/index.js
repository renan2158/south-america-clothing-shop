import ItemsGrid from './items_grid';
import React, { Component } from 'react';
import Header from '../../components/Header/index';

import './styles.css';

export default class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: null,
            category: null
        }

        this.updateSearch = this.updateSearch.bind(this);
        this.updateCategory = this.updateCategory.bind(this);
    }

    updateSearch(value) {
        this.setState({
            search: value
        })
    }

    updateCategory(value) {
        this.setState({
            category: value
        })
    }

    render() {
        return (
            <div id="gallery-container">
                <Header />

                <section className="hidden">
                    <input placeholder="Search..." type="text" />
                </section>

                <div className="body">
                    <div id="content">
                        <div id="categories">
                            <button
                                type="button"
                                className="category"
                                onClick={() => this.updateCategory("tshirts")}
                            >
                                <p>T-SHIRTS</p>
                                {/* <img src={tshirt} alt="" /> */}
                            </button>

                            <button
                                type="button"
                                className="category"
                                onClick={() => this.updateCategory("coats")}
                            >
                                <p>COATS</p>
                                {/* <img src={coat} alt="" /> */}
                            </button>

                            <button
                                type="button"
                                className="category"
                                onClick={() => this.updateCategory("pants")}
                            >
                                <p>PANTS</p>
                                {/* <img src={pants} alt="" /> */}
                            </button>

                            <button
                                type="button"
                                className="category"
                                onClick={() => this.updateCategory("shoes")}
                            >
                                <p>SHOES</p>
                                {/* <img src={shoes} alt="" /> */}
                            </button>
                        </div>

                        <ItemsGrid
                            search={this.state.search}
                            gender={this.props.location.state['gender']}
                            category={this.state.category}
                        />
                    </div>
                </div>
            </div>
        );
    }
}