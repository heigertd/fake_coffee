import React from 'react'
import Header from '../../components/Header/Header';
import './contact.css';

export default function Contact() {
    return (
        <div className = 'contact-page'>
            <Header navbar = {true} />
            <div className = 'contact-div'>
                <form className = 'form-div'>
                    <div className = 'name-form'>
                        <div>
                            <label for="fname">First name:</label>
                            <input type="text" id="fname" name="fname"></input>
                        </div>
                        <div>
                            <label for="lname">Last name:</label>
                            <input type="text" id="lname" name="lname"></input>
                        </div>
                        <div>
                            <label for="email">Email:</label>
                            <input type="text" id="email" name='email'></input>
                        </div>
                    </div>
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows='10' columns = '30'></textarea>
                    <input type="reset" value="Submit"></input>
                </form>
            </div>
        </div>
    )
}
