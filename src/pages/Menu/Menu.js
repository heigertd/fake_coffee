import React from 'react';
import Header from '../../components/Header/Header';
import menu from './menu-data';

import coffee from '../../images/coffee2.jpg';
import sandwich from '../../images/sandwich.jpg';
import './menu.css'

export default function Menu() {
    return (
        // <div className = 'menu-page'>
        //     <Header navbar = {true} header = 'Menu'/>
        //         {menu.map((type) =>
        //             <div className = 'menu-div'>
        //                 <table className = 'menu-table'>
        //                     {type.map((item) => 
        //                         <tr className = 'menu-row'>
        //                             <td>{item.item}</td>
        //                             <td>{item.price}</td>  
        //                         </tr>
        //                     )}
        //                 </table>
        //             </div>
        //         )}
        // </div>

        <div className = 'menu-page'>
            <Header navbar = {true} header = 'Menu'/>
            
            <div className = 'menu-div'>
                <div className = 'ind-menu'>
                    <img alt = 'coffee' src = {coffee}></img>
                    <table className = 'menu-table'>
                        {menu[0].map((item) => 
                            <tr className = 'menu-row'>
                                <td>{item.item}</td>
                                <td>{item.price}</td>  
                            </tr>
                        )}
                    </table>
                </div>
                <div className = 'ind-menu'>
                    <table className = 'menu-table'>
                        {menu[1].map((item) => 
                            <tr className = 'menu-row'>
                                <td>{item.item}</td>
                                <td>{item.price}</td>  
                            </tr>
                        )}
                    </table>
                    <img alt = 'sandwich' src = {sandwich}></img>
                </div>
            </div>
                
        </div>
    )
}
