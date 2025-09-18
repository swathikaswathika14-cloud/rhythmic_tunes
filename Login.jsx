import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // dummy auth
    if (email && password) {
      setToken("dummyToken");
      navigate("/home");
    }
  };

  return (
    <div className="auth-container spotify-theme">
      <h1 className="spotify-logo">Audio Aura</h1>
      <form className="auth-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-btn">Log In</button>
      </form>
      <p>
        Don’t have an account?{" "}
        <button onClick={() => navigate("/register")} className="register-btn">
          Sign up for Audio Aura
        </button>
      </p>
    </div>
  );
}
