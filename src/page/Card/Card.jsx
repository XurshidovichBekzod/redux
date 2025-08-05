import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser } from '../Redux/feature/UserSlice'
import "./Card.css"
const Card = () => {
  const users = useSelector((state) =>  state.users)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteUser(id))
  }

  return (
    <div>
      <h3>User Table</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Profession</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.profession}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Card
