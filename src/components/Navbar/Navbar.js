import React from 'react'
import './navbar.css'

export default function Navbar() {
    return (
        <div className = 'navbar'>
            <button className = 'tab'>
            <a href = '/'> Home</a>
            </button>
            <div className = 'tab'>
                <a href = '/about'>About</a>
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
