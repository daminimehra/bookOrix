import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import qs from "qs";
import "react-toastify/dist/ReactToastify.css";
export default function Userlogin() {
  let [email, setEmail] = useState("");
  const saveEmail = (e) => {
    setEmail(e.target.value);
  };
  let [password, setPassword] = useState("");
  const savePassword = (e) => {
    setPassword(e.target.value);
  };

  const dangerNotify = (data) => {
    toast.error(data, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const successNotify = () => {
    toast.success("Login Succesfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const Login = (e) => {
    e.preventDefault();
    console.log(email, password);

    let postData = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:3008/api/user/login", qs.stringify(postData), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((data) => {
        console.log(data);
        if (data.data.success) {
          sessionStorage.setItem("token", data.data.token);
          sessionStorage.setItem("uid", data.data.data._id);
          toast.success(data.data.message);
        }
        setTimeout(() => {
          data.data.success ? successNotify() : dangerNotify(data.data.message);
          if (data.data.success) {
            // console.log(sessionStorage.getItem('uid'))
            // window.location.reload(true);
            // navigate("/");
            window.location.href = "/";
          }
        }, 1000);
      });
    // let navigate = useNavigate();
    //   navigate(`/addnotes`);
  };
  let navigate = useNavigate();
  let changePage = (e) => {
    navigate(`/addnotes`);
    Login();
  };
  const test = () => {
    // console.log(data)
    successNotify();
    dangerNotify();
  };

  return (
    <>
      {/* <div class="inner-banner">
            {/* <section class="w3l-breadcrumb">
            {/* <div class="container">
              <h4 class="inner-text-title font-weight-bold text-white mb-sm-3 mb-2">LOGIN</h4>
              <ul class="breadcrumbs-custom-path">
                  <li><a href="index.html">Home</a></li>
                  <li class="active"><span class="fa fa-chevron-right mx-2" aria-hidden="true"></span>LOGIN</li>
              </ul>
            </div> */}
      {/* </section> */}
      {/* </div> */}
      <section className="login py-5 border-top-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                style={{ marginLeft: "0", width: "100%" }}
                src="assets/images/vector.webp"
              ></img>
            </div>
            <div className="col-lg-5 col-md-8 align-item-center">
              <marquee direction="left to right">
                <h3></h3>
              </marquee>
              <div className="border shadow">
                <h3 className="bg-gray p-4" style={{ color: "#4e917d" }}>
                  Login Now
                </h3>
                <form action="">
                  <fieldset className="p-4">
                    <input
                      type="text"
                      placeholder="Enter Email"
                      className="form-control border p-3 w-100 my-2"
                      value={email}
                      onChange={saveEmail}
                    />
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className="form-control border p-3 w-100 my-2"
                      value={password}
                      onChange={savePassword}
                    />

                    <button
                      type="submit"
                      className="form-control d-block py-3 px-5  border-0 rounded  mt-3"
                      onClick={Login}
                      style={{ color: "#caf7e2", backgroundColor: " #366858" }}
                    >
                      Log in
                    </button>
                    <a
                      className="mt-3 d-block"
                      href="#"
                      style={{ color: "#366858" }}
                    >
                      Forget Password?
                    </a>
                    <Link
                      className="mt-3 d-inline-block "
                      to="/Signup"
                      style={{ color: "#366858" }}
                    >
                      Register Now
                    </Link>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
