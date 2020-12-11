import React from 'react';
import {useState} from 'react';
import './hover.css'

export default function Hover(props) {
    const [hover, setHover] = useState('')
    
    var main_styles = {
        height: '80vh',
        width: '250px',
        margin: '30px',
        
        backgroundImage:`url(${props.background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

        position: 'relative',

        display: 'flex',
        flexDirection: 'column-reverse',
        justifyContent: 'space-around',
        alignItems: 'center',

        border: '2px solid black',
        borderRadius: '10px',
        boxShadow: `30px 30px ${props.shadowColor}`,

        // width: '100vw',
        // height: '100vh',
        // paddingTop: '20vh',
        // position: 'relative',
        // zIndex: '2', 
    }

    var cover_styles = {
        height: '0%',
        width: '100%',
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        backgroundColor: `${props.backgroundColor}`,
        backdropFilter:'blur(3px)',
    }
    
    return (
        <div style = {main_styles} className = {hover === 'hover'? 'main hover' : 'main'}>
            <div style ={cover_styles} className = {hover === 'hover'? 'cover show' : 'cover'}></div>
            <div 
                onMouseEnter={() => setHover('hover')}
                onMouseLeave={() => setHover('')} 
                className = 'text'
            >
                <p>{props.text}</p>
            </div>
        </div>
    )
}
