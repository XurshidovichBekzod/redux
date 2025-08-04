import React from 'react'
import "./Card.css"

const Card = () => {
    return (
        <div className="container">
            <h2>User Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Bekzod</td>
                        <td>21</td>
                        <td>Uzbekistan</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Card