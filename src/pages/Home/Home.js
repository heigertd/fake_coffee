import React from 'react'
import './home.css'
import Hover from '../../components/Hover/Hover'
import Background from '../../images/coffee1.jpg'

export default function Home() {
    return (
        <div>
            {/* <div>parrallax video/picture div</div> */}
            <div className = 'hover-div'>
                <Hover 
                    text = 'About' 
                    shadowColor = 'rgb(139, 60, 36)' 
                    backgroundColor = 'rgb(187, 148, 87, 0.404)' 
                    background = {Background} 
                />
                <Hover 
                    text = 'Menu' 
                    color = 'rgb(114, 250, 121)'
                    shadowColor = 'rgb(247, 210, 151)' 
                    backgroundColor = 'rgb(67, 40, 24, 0.604)' 
                    background = {Background}
                />
                <Hover 
                    text = 'Contact' 
                    color = 'yellow'
                    shadowColor = 'rgb(139, 60, 36)' 
                    backgroundColor = 'rgb(187, 148, 87, 0.404)' 
                    background = {Background}
                />
            </div>
        </div>
    )
}
