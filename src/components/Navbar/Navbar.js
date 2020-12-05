import React from 'react'
import './navbar.css'

export default function Navbar() {
    return (
        <div className = 'navbar'>
            <div className = 'tab'>
                <p>About</p>
            </div>
            <div className = 'tab'>
                <p>Home</p>
            </div>
            <div className = 'tab'>
                <p>Menu</p>
            </div>
            <div className = 'tab'>
                <p>Contact</p>
            </div>
        </div>
    )
}
