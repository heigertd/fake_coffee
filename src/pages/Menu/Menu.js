import React from 'react';
import Header from '../../components/Header/Header';
import menu from './menu-data'
import './menu.css'

export default function Menu() {
    return (
        <div className = 'menu-page'>
            <Header navbar = {true} />
            <div className = 'menu-div'>
                {menu.map((type) =>
                    <table className = 'menu-table'>
                        {type.map((item) => 
                            <tr className = 'menu-row'>
                                <td>{item.item}</td>
                                <td>{item.price}</td>  
                            </tr>
                        )}
                    </table>
                )}
            </div>
        </div>
    )
}
