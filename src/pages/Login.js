import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../config/firebase";
import { useHistory } from "react-router-dom";

function Login() {
  const auth = getAuth(app);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const history = useHistory();

  function handleSubmit(e) {
    if (isLoading) return;
    setIsLoading(true);
    e.preventDefault();
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((res) => {
        setIsLoading(false);
        history.replace("/");
      })
      .catch((err) => {
        setError("Invalid email or password");
        setIsLoading(false);
      });
  }

  function handleInput(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div style={{ position: "relative", height: "80vh", width: "100vw" }}>
      <form className="center-form" onSubmit={handleSubmit}>
        {error !== "" && (
          <div
            className="alert alert-danger"
            role="alert"
            value={formData.email}
          >
            {error}
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={formData.email}
            name="email"
            onChange={handleInput}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={formData.password}
            onChange={handleInput}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {isLoading ? (
            <i className="fas fa-circle-notch fa-spin"></i>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
}

export default Login;
