import React from 'react'
import './home.css'
import Hover from '../../components/Hover/Hover'
import Header from '../../components/Header/Header'
import About from '../../components/About/About'
import Background from '../../images/coffee1.jpg'
import Background2 from '../../images/hover2.jpg'
import Background3 from '../../images/hover3.jpg'

export default function Home() {
    return (
        <div className = 'main'>
            {/* <div> */}
                <Header navbar = {false} header = 'Fake Coffee Shop' />
            {/* </div> */}
            <div className = 'hover-div'>
                <div className = 'content'>
                    <Hover 
                        text = 'About' 
                        shadowColor = 'rgb(139, 60, 36, .404)' 
                        backgroundColor = 'rgb(187, 148, 87, 0.404)'
                        link = '/about'
                        background = {Background} 
                    />
                    <Hover 
                        text = 'Menu' 
                        color = 'rgb(114, 250, 121)'
                        shadowColor = 'rgb(247, 210, 151)' 
                        backgroundColor = 'rgb(67, 40, 24, 0.604)'
                        link = '/menu'
                        background = {Background2}
                    />
                    <Hover 
                        text = 'Contact' 
                        color = 'yellow'
                        shadowColor = 'rgb(139, 60, 36, .404)' 
                        backgroundColor = 'rgb(187, 148, 87, 0.404)' 
                        link = '/contact'
                        background = {Background3}
                    />
                </div>
            </div>
            <About />
        </div>
    )
}
