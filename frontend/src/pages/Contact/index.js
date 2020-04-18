import React from 'react';
import Header from '../../components/Header/index';

import './styles.css';

export default function Contact() {
    return (
        <div id="contact-container">
            <Header />

            <div className="body">
                <h1>Contact Us</h1>

                <form>
                    <fieldset>
                        <div className="form-group">
                            <label className="col-form-label" htmlFor="name">Name</label>
                            <input type="text" className="form-control" placeholder="Type your name" id="name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>

                        <div className="form-group">
                            <label className="col-form-label" htmlFor="subject">Subject</label>
                            <input type="text" className="form-control" placeholder="Enter the subject" id="subject" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" id="message" rows="10"></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </fieldset>
                </form>

                {/* <form className="form">
                    
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
                </form> */}
            </div>
        </div>
    );
}