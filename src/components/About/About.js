import React from 'react'
import './about.css';

export default function About() {
    return (
        <div className = 'about'>
            <div className = 'location'>
                <h2>Location</h2>
                <h4>Random Pl NW Silverdale, WA 98383</h4>
            </div>
            <div className = 'times'>
                <h2>Hours</h2>
                <table>
                    <tr>
                        <td>Monday</td>
                        <td>6:00am - 6:00pm</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>6:00am - 6:00pm</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>6:00am - 6:00pm</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>6:00am - 6:00pm</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>6:00am - 6:00pm</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>6:00am - 5:00pm</td>
                    </tr>
                    <tr>
                        <td>Sunday</td>
                        <td>8:00am - 5:00pm</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
