import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUsers } from "../Redux/feature/UserSlice";
import { useNavigate } from "react-router-dom";
import "./Input.css"

const Input = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      id: Date.now(),
      name,
      age,
      profession,
    };

    dispatch(addUsers(user));
    navigate("/card");
  };

  return (
    <form className="inputCard" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="Profession"
        value={profession}
        onChange={(e) => setProfession(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Input;
