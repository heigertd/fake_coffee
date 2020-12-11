import React from 'react'
import './navbar.css'

export default function Navbar() {
    return (
        <div className = 'navbar'>
            <div className = 'tab'>
                <a href = '/about'>About</a>
            </div>
            <div className = 'tab'>
                <a href = '/'>Home</a>
            </div>
            <div className = 'tab'>
                <a href = '/menu'>Menu</a>
            </div>
            <div className = 'tab'>
                <a href = '/contact'>Contact</a>
            </div>
        </div>
    )
}
