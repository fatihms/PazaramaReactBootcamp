import React, { useState, useEffect } from "react";
import "./styles.css";

import axios from "axios";

import PrimaryInput from "../../components/PrimaryInput";
import CommonButton from "../../components/CommonButton";

import API from "../../config/api";

function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const loadUsers = async () => {
    setLoading(false);

    const response = await axios.get(API);
    setUsers(response.data);
    setLoading(true);
  };

  const newUser = {
    name,
    password,
    email,
  };

  const sendUsers = async () => {
    try {
      const response = await axios.post(API, newUser);
      console.log(response.data);
      setEmail("");
      setName("");
      setPassword("");
      window.location.href = "/login";
    } catch (err) {
      console.error(err);
    }
  };

  const findUsers = () => {
    const user = users.find((user) => user.email === email);
    if (!user) {
      sendUsers();
      console.log("Kullanıcı oluşturuldu");
    } else {
      setError("Kullanıcı zaten var");
    }
  };

  useEffect(() => {
    users.length && findUsers();
  }, [users]);

  const handleSubmit = (e) => {
    e.preventDefault();
    loadUsers();
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="register-container">
      <img src="" alt="" />
      <h2 className="r-h2">Register</h2>
      <div className="r-input-container">
        <PrimaryInput
          placeholder="Full Name"
          type="text"
          text="Full Name"
          value={name}
          onChange={handleChangeName}
        />
        <PrimaryInput
          placeholder="username@gmail.com"
          type="text"
          text="Email"
          value={email}
          onChange={handleChangeEmail}
        />
        <PrimaryInput
          placeholder="Password"
          type="password"
          text="Password"
          value={password}
          onChange={handleChangePassword}
        />
      </div>
      <div className="r-button-container">
        <CommonButton onClick={handleSubmit}>Sign up</CommonButton>
        <p style={{ marginTop: "10px", color: "red" }}>{error}</p>
      </div>
    </div>
  );
}

export default Register;
