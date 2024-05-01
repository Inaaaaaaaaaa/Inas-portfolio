import React from 'react';
import './Contactme.css';

export default function Contactme({ contactRef }) {
    return (
        <div ref={contactRef} className="background">
            <div className="h1-top">
                <h1>Contact me</h1>
            </div>

            <div className="container">
                <label htmlFor="fname">First name:</label>
                <input type="text" placeholder="First name" id="fname" required/>

                <label htmlFor="lname">Last name:</label>
                <input type="text" placeholder="Last name" id="lname" required/>

                <label htmlFor="email">Email:</label>
                <input type="text" placeholder="Email" id="email" required/>

                <label htmlFor="phone">Phone:</label>
                <input type="text" placeholder="Phone number" id="phone" required/>

                <div className="message-box">
                    <textarea placeholder="Message" id="message" required rows="4" cols="50"></textarea>
                </div>
                <button>Send</button>
            </div>
        </div>
    );
};


