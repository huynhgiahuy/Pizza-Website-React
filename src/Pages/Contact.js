import React from "react";
import PizzaLeft from '../Assets/pizzaLeft.jpg'
import '../Styles/Contact.css'

function Contact() {
    return(
        <div className="contact">
            <div className="leftSide" style={{ backgroundImage: `url(${PizzaLeft})` }}></div>
            <div className="rightSide">
                <h1>Contact US</h1>
                <form id='contact-form' method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input name="name" placeholder="Enter your name" type="text"/>
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="Enter your email" type="email"/>
                    <label htmlFor="message">Message</label>
                    <textarea rows="6" name ="message" placeholder="Enter your messages" required></textarea>
                    <button type="submit">Submit Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact