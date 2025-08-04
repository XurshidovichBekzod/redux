import React from 'react'
import "./Input.css"
import { useNavigate } from 'react-router-dom'
const Input = () => {
    const navigate = useNavigate()

    const handleSubmit = () =>{
        navigate('/card')
    }
  return (
    <div>
        <form className='inputCard' action="">
            <input type="text" placeholder='Enter your name'/>
            <input type="text" placeholder='Enter your age'/>
            <input type="text" placeholder='Enter your profession'/>

            <button type='submit' onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default Input