import React, { useState, useEffect, useContext } from "react";
import "./styles.css";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import PrimaryInput from "../../components/PrimaryInput";
import CommonButton from "../../components/CommonButton";

import { FcGoogle } from "react-icons/fc";
import { BsGoogle, BsGithub, BsFacebook } from "react-icons/bs";

import UserContext from "../../context/UserContext";

import API from "../../config/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { fullName, setFullName } = useContext(UserContext);

  let navigate = useNavigate();

  const loadUsers = async () => {
    setLoading(false);

    const response = await axios.get(API);
    setUsers(response.data);
    setLoading(true);
  };

  const findUsers = () => {
    const user = users.find((user) => user.email === email);
    if (user) {
      if (user.password === password) {
        setFullName(user.name);
        localStorage.setItem("isAuthenticated", true);
        navigate(`/home/`);
      } else {
        setError("Şifre yanlış");
      }
    } else {
      console.log("Kullanıcı bulunamadı");
      setError("Kullanıcı bulunamadı");
    }
  };

  useEffect(() => {
    users.length && findUsers();
  }, [users]);

  const handleSubmit = (e) => {
    e.preventDefault();
    loadUsers();
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="login-container">
      <img src="" alt="" />
      <h2 className="l-h2">Login</h2>
      <div className="l-input-container">
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
      <div className="l-button-container">
        <CommonButton onClick={handleSubmit}>Sign in</CommonButton>
        <p style={{ marginTop: "10px", color: "red" }}>{error}</p>
      </div>
      <p className="l-alternative-login-text">or continue with</p>
      <div className="l-social-media-buttons-container">
        <CommonButton variant={"outlined"}>
          <BsGoogle size={24} color="green" />
        </CommonButton>
        <CommonButton variant={"outlined"}>
          <BsGithub size={24} color="black" />
        </CommonButton>
        <CommonButton variant={"outlined"}>
          <BsFacebook size={24} color="deepskyblue" />
        </CommonButton>
      </div>
      <div className="l-register-container">
        <p>Don't have an account yet?</p>
        <Link to="/register" className="r-link">
          <span>Register for free</span>
        </Link>
      </div>
    </div>
  );
}

export default Login;
