import ItemsGrid from './items_grid';
import React, { Component } from 'react';
import Header from '../../components/Header/index';

import './styles.css';

export default class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: null
        }

        this.updateCategory = this.updateCategory.bind(this);
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

                <div className="body">
                    <div id="content">
                        <section id="categories">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => this.updateCategory("tshirts")}
                            >
                                T-SHIRTS
                            </button>

                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => this.updateCategory("coats")}
                            >
                                COATS
                            </button>

                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => this.updateCategory("pants")}
                            >
                                PANTS
                            </button>

                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => this.updateCategory("shoes")}
                            >
                                SHOES
                            </button>
                        </section>

                        <ItemsGrid
                            search={this.props.location.state['search']}
                            gender={this.props.location.state['gender']}
                            category={this.state.category}
                        />
                    </div>
                </div>
            </div>
        );
    }
}