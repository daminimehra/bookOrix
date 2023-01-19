import { Component, useEffect, useState } from "react";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { Link } from "react-router-dom";

function Header() {
  const [isLog, setLog] = useState();
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token != null && token != undefined && token != "") {
      setLog(true);
    }
  }, [isLog]);
  const logMeout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("token");
    setLog(false);
    window.location.href = "/login";
  };
  // useEffect(() => {
  //   if (!isLog) {
  //     window.location.href = "/login";
  //   }
  // }, [isLog]);
  return (
    <>
      <header
        id="site-header"
        class="fixed-top "
        style={{ background: " #fff" }}
      >
        <div class="container-fluid">
          <nav className="navbar navbar-expand-lg stroke ">
            <nav className="nav">
              <div class="navbar-brand d-flex align-items-center">
                <div className="logo" style={{ color: "#4e917d" }}>
                  <h1>bookOrix. </h1>
                </div>
              </div>
              <button
                class="navbar-toggler collapsed bg-gradient"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon fa icon-expand fa-bars"></span>
                <span class="navbar-toggler-icon fa icon-close fa-times"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-lg-auto nav-links">
                  <li class="nav-item">
                    <Link className="a" to="/">
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link className="a" to="/Bookmain">
                      Books
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link className="a" to="/notes">
                      Explore
                    </Link>
                  </li>
                  <li class="nav-item ">
                    <Link className="a" to="/About">
                      About
                    </Link>
                  </li>
                  {isLog ? (
                    <>
                      <li class="nav-item">
                        <Link className="a" to="/addnotes">
                          Add Notes
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link className="a" to="/myorders">
                          My Orders
                        </Link>
                      </li>
                      <li class="nav-item">
                        <a className="a" onClick={logMeout}>
                          Logout
                        </a>
                      </li>
                    </>
                  ) : (
                    <li class="nav-item">
                      <Link className="a" to="/login">
                        Login
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </nav>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;
