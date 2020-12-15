import React from 'react'
import Header from '../../components/Header/Header';
import './contact.css';

export default function Contact() {
    return (
        <div className = 'contact-page'>
            <Header navbar = {true} />
            <div className = 'contact-div'>
                <form className = 'form-div'>
                    {/* <div className = 'name-form'> */}
                        <input type="text" id="fname" name="fname" placeholder = 'Name'></input>
                        <input type="text" id="email" name='email' placeholder = 'Email'></input>  
                    {/* </div> */}
                    <textarea id="message" name="message" rows='10' columns = '30' placeholder = 'Message Goes Here!'></textarea>
                    <input className = 'submit-button' type="reset" value="Submit"></input>
                </form>
                <div className = 'social-media'>
                    <img src="https://img.icons8.com/fluent-systems-regular/56/000000/instagram-new.png"/>
                    <img src="https://img.icons8.com/fluent-systems-regular/56/000000/facebook-new.png"/>
                    <img src="https://img.icons8.com/android/56/000000/twitter.png"/>
                </div>
            </div>
        </div>
    )
}
