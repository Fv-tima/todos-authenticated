import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const { signUp, currentUser, signUpWithGoogle } = useAuth();

  async function register(e) {
    e.preventDefault();

    try {
      setError("");
      await signUp(email, password);
      navigate("/account")
    } catch (err) {
      setError(err.message);
    }
  }

  async function registerGoogle() {
    try {
      setError("");
      await signUpWithGoogle();
      navigate("/account");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="register">
      <h2>Create an account</h2>
      <p>Let get started with your todos</p>

      <button onClick={registerGoogle}>Sign up with google</button>
      <p className="or">OR</p>
      <form onSubmit={register}>
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
        <button>Create account</button>
      </form>
      <h6>{error}</h6>
      <p>
        Already have an account?<Link to="/">Login</Link>
      </p>
    </div>
  );
}
