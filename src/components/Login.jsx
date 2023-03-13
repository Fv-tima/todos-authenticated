import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const { signin, currentUser, signUpWithGoogle } = useAuth();

  async function login(e) {
    e.preventDefault();

    try {
      setError("");
      await signin(email, password);
      navigate("/account")
      console.log(currentUser.email);
    } catch (err) {
      setError(err.message);
    }
  }

  async function logInGoogle() {
    try {
      await signUpWithGoogle();
      navigate("/account");

    } catch (err) {
      console.log(err.messsage);
    }
  }
  return (
    <div className="login">
      <h2>Welcome back</h2>
      <p>Please enter your details</p>

      <button onClick={logInGoogle}>Log in With Google</button>
      <p className="or">OR</p>
      <form onSubmit={login}>
        <div>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button>Sign In</button>
      </form>
      <h6>{error}</h6>
      <p>
        Don't have an account <Link to="/register">Sign Up</Link>
      </p>
    </div>
  );
}
