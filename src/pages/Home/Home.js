import React from 'react'
import './home.css'
import Hover from '../../components/Hover/Hover'
import Background from '../../images/coffee1.jpg'

export default function Home() {
    return (
        <div>
            {/* <div>parrallax video/picture div</div> */}
            <div className = 'hover-div'>
                <Hover text = 'About' color = 'salmon' background = {Background} />
                <Hover text = 'Menu' color = 'rgb(114, 250, 121)' />
                <Hover text = 'Contact' color = 'yellow' />
            </div>
        </div>
    )
}
