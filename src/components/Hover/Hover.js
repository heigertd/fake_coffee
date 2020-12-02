import React from 'react';
import {useState} from 'react';
import './hover.css'

export default function Hover() {
    const [hover, setHover] = useState('')
    
    function addHoverClass(){
        setHover('hover');
    }

    return (
        <div className = {hover === 'hover'? 'main hover' : 'main'}>
            <img className = {hover === 'hover'? 'image show' : 'image'} src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH6NUVHN0fDWPQJp5S_jj0D4hCOo0-9LfOeg&usqp=CAU'></img>
            <div 
                onMouseEnter={() => setHover('hover')}
                onMouseLeave={() => setHover('')} 
                className = 'text'
            >
                <p>About</p>
            </div>
        </div>
    )
}
