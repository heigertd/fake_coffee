import React from 'react'
import Header from '../../components/Header/Header';
import './contact.css';

//TODO: Blurb before contact info 'feel free to send us an email blah blah blah'......

export default function Contact() {
    return (
        <div className = 'contact-page'>
            <Header navbar = {true} header = 'Contact' />
            
                <div className = 'contact-div'>
                    <h3>Feel free to send us an email with any questions or concerns! We appreciate your feedback!</h3>
                    <form className = 'form-div'>
                        {/* <div className = 'name-form'> */}
                            <input type="text" id="fname" name="fname" placeholder = 'Name'></input>
                            <input type="text" id="email" name='email' placeholder = 'Email'></input>  
                        {/* </div> */}
                        <textarea id="message" name="message" rows='10' columns = '30' placeholder = 'Message Goes Here!'></textarea>
                        <input className = 'submit-button' type="reset" value="Submit"></input>
                    </form>
                    <div className = 'social-media'>
                        <img alt = 'instagram' src="https://img.icons8.com/fluent-systems-regular/56/000000/instagram-new.png"/>
                        <img alt = 'facebook' src="https://img.icons8.com/fluent-systems-regular/56/000000/facebook-new.png"/>
                        <img alt = 'twitter' src="https://img.icons8.com/android/56/000000/twitter.png"/>
                    </div>
                </div>
            
        </div>
    )
}
