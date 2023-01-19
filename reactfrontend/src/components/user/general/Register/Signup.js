import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import qs from "qs";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [log, setLog] = useState(false);

  let [name, setName] = useState("");
  const saveName = (e) => {
    setName(e.target.value);
  };
  let [email, setEmail] = useState("");
  const saveEmail = (e) => {
    setEmail(e.target.value);
  };
  let [password, setPassword] = useState("");
  const savePassword = (e) => {
    setPassword(e.target.value);
  };

  let [Cpassword, setCpassword] = useState("");
  const saveCpassword = (e) => {
    setCpassword(e.target.value);
  };
  function validation(data) {
    if (data.name === undefined || data.name === "") {
    }
  }
  const dangerNotify = (data) => {
    toast.error(data, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const successNotify = () => {
    toast.success("Reggistered", {
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
  function Signup(e) {
    e.preventDefault();
    let postData = {
      name: name,
      email: email,
      password: password,
      Cpassword: Cpassword,
    };
    if (password === Cpassword) {
      console.log(postData);
      axios
        .post("http://localhost:3008/api/user/add", qs.stringify(postData), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((data) => {
          console.log(data);
          data.data.success ? successNotify() : dangerNotify(data.data.msg);
          if (data.data.success) {
            setLog(true);
          }
        })
        .catch((erro) => console.log(erro));
    } else {
      alert("invaild entery");
      dangerNotify("Password and Confirm Password not match");
    }
  }

  let navigate = useNavigate();
  useEffect(() => {
    if (log) {
      setTimeout(() => {
        navigate(`/login`);
      }, 2000);
    }
  }, [log]);
  return (
    <>
      <div class="mask d-flex align-items-center h-100 gradient-custom-3">
        <div class="container h-3">
          <div class="row d-flex justify-content-center align-items-center h-3">
            <div class="col-6 col-md-4 col-lg-5 col-xl-4">
              <div class="card" style={{ "border-radius": "15px" }}>
                <div class="card-body p-5">
                  <h2
                    class="text-uppercase text-center mb-2"
                    style={{ color: "#366858" }}
                  >
                    Sign Up
                  </h2>

                  <form>
                    <div class="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example1cg"
                        class="form-control form-control-lg"
                        required
                        placeholder="Name"
                        value={name}
                        onChange={saveName}
                      />
                      <label
                        class="form-label"
                        for="form3Example1cg"
                        style={{ color: "#366858" }}
                      >
                        Your Name
                      </label>
                    </div>

                    <div class="form-outline mb-2">
                      <input
                        id="form3Example3cg"
                        required
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={saveEmail}
                        class="form-control form-control-lg"
                      />
                      <label
                        class="form-label"
                        for="form3Example3cg"
                        style={{ color: "#366858" }}
                      >
                        Your Email
                      </label>
                    </div>

                    <div class="form-outline mb-2">
                      <input
                        id="form3Example4cg"
                        required
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={savePassword}
                        class="form-control form-control-lg"
                      />
                      <label
                        class="form-label"
                        for="form3Example4cg"
                        style={{ color: "#366858" }}
                      >
                        Password
                      </label>
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cdg"
                        value={Cpassword}
                        onChange={saveCpassword}
                        placeholder="Confirm Password"
                        class="form-control form-control-lg"
                      />
                      <label
                        class="form-label"
                        for="form3Example4cdg"
                        style={{ color: "#366858" }}
                      >
                        Repeat your password
                      </label>
                    </div>

                    <div class="d-flex justify-content-center">
                      <button
                        type="submit"
                        onClick={Signup}
                        class="btn btn-info btn-block btn-lg gradient-custom-4 text-body"
                        style={{ color: "#caf7e2" }}
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </section> */}

      <ToastContainer />
    </>
  );
}

export default Signup;
