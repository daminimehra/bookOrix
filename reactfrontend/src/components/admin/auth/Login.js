import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import qs from "qs";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  // State variables for email and password
  let [email, setEmail] = useState("");
  const saveEmail = (e) => {
    setEmail(e.target.value);
  };

  let [password, setPassword] = useState("");
  const savePassword = (e) => {
    setPassword(e.target.value);
  };

  // Function to handle user login
  const LoginUSer = (e) => {
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

        // If login is successful
        if (data.data.success) {
          // Save user data to sessionStorage
          sessionStorage.setItem("token", data.data.token);
          sessionStorage.setItem("uid", data.data.data._id);
          sessionStorage.setItem("user_type", data.data.data.userType);

          // Display success toast notification
         
        }

        // Set a timeout for displaying the toast notification
        setTimeout(() => {
          data.data.success
            ? toast.success(data.data.message)
            : toast.error(data.data.message);

          if (data.data.success) {
            // Redirect the user to the appropriate page based on user type
            if (data.data.data.userType === 1) {
              window.location.href = "/admin/home";
            } else {
              toast.error("You can not access this page");
            }
          }
        }, 1000);
      });
  };

  // Hook for navigating to other pages
  let navigate = useNavigate();
  let changePage = (e) => {
    navigate(`/admin/home`);
    Login();
  };

  // Component rendering
  return (
    <>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="assets/images/573.jpg"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <h2 style={{ color: "#366858" }}>Admin Login</h2>
                <div className="form-outline mb-4">
                  <label
                    className="form-label"
                    for="form3Example3"
                    style={{ color: "#366858" }}
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="form3Example3"
                    value={email}
                    onChange={saveEmail}
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                </div>

                <div className="form-outline mb-3">
                  <label
                    className="form-label"
                    for="form3Example4"
                    style={{ color: "#366858" }}
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    id="form3Example4"
                    value={password}
                    onChange={savePassword}
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                  </div>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    onClick={LoginUSer}
                    className="btn btn-primary btn-lg"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
export default Login;
