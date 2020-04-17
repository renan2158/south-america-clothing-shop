import React from 'react';
import Header from '../../components/Header/index';

import './styles.css';

export default function Contact() {
    return (
        <div id="contact-container">
            <Header />

            <div className="body">
                <p>Contact Us</p>

                <form className="form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                    />
                    
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                    />
                    
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                    />
                    
                    <textarea
                        name="message"
                        cols="30"
                        rows="10"
                        placeholder="Message"
                    ></textarea>

                    <button
                        type="submit"
                        name="submit"
                        value="submit"
                    >Submit</button>
                </form>
            </div>
        </div>
    );
}