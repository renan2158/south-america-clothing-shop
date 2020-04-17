import React, { Component } from 'react';

// import './styles.css';

export default class ItemsList extends Component {
    render() {
        return (
            <div id="items">
                <ul>
                    <li>
                        {this.props.items.forEach(item => (
                            <div className="item" key={item[0]}>
                                <section className="info">
                                    <img src={item[1]} alt="" />
                                    
                                    <div>
                                        <p className="descricao">{item[2]}</p>
                                        <p className="detail">Size: {item[3]}</p>
                                    </div>
                                </section>
    
                                <section className="total">
                                    <div className="quantity">
                                        <button type="button" className="minus">-</button>
    
                                        <label>{item[6]}</label>
                                        
                                        <button type="button" className="plus">+</button>
                                    </div>
    
                                    <div className="value">
                                        <p className="total-text">Price:</p>
                                        <p className="total-value">{item[4]}</p>
                                    </div>
                                </section>
                            </div>
                        ))}
                    </li>
                </ul>
            </div>
        );
    }
}