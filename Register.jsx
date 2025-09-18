import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Dummy save
    console.log("Registered:", email, password);
    navigate("/login");
  };

  return (
    <div className="auth-container spotify-theme">
      <h1>Create Account</h1>
      <form className="auth-form" onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-btn">Register</button>
      </form>
    </div>
  );
}
