import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../config/firebase";
import { useHistory } from "react-router-dom";

function Header() {
  const auth = getAuth(app);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      }
    });
  }, []);

  function logout() {
    signOut(auth)
      .then((res) => {
        history.replace("/login");
        setIsLoggedIn(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/gallery">
              Gallery
            </Link>
            {isLoggedIn ? (
              <p
                className="nav-link"
                onClick={logout}
                style={{ cursor: "pointer" }}
              >
                Logout
              </p>
            ) : (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
