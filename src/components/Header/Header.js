import React from 'react'
import Navbar from '../Navbar/Navbar'
import './header.css'

export default function Header(props) {
    
    let navbar = props.navbar
    
        return (
            <div>
                <div className = 'header'>
                {navbar &&
                    <Navbar />
                }
                <div className = 'header-div'>
                    <h1 className = 'typewriter'>{props.header}</h1>
                </div>
                </div>
                
            </div>
        )
    
}
