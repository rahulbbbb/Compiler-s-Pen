import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./LoginPage.css";
import { auth } from "../firebase";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const logIn = () => {
    try {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => navigate("/articles"))
        .catch((error) => {
          console.log(error.message);
          alert(error.code);
        });
    } catch (e) {
      setError(e.message);
      console.log("Login error:", e.message);
    }
  };
  return (
    <>
      <form className="form">
        <h1>Log In</h1>
        {error && <p className="error">{error}</p>}
        <input
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="btn-link">
        <div className="button" style={{ backgroundColor: "black" }} onClick={logIn}>
          Log In
        </div>
        <Link className="link1" to="/create-account">
          Don't have an account?<br></br> Create one here{" "}
        </Link>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
