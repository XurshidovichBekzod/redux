import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Headercom.css"

const Headercom = () => {
  return (
    <header className='header'>
        <nav className='navbar container'>
            <div className='logo'>
                <h2>Logoo</h2>
            </div>
            <ul className='collection'>
                <li className='item'>
                    <NavLink to={"/"}>Register</NavLink>
                </li>
                <li className='item'>
                    <NavLink to={"/card"}>User</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Headercom