import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import qs from "qs";
import { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function Order() {
  const navigate = useNavigate();
  let [Address, setaddress] = useState("");
  const [isLog, setLog] = useState(false);
  const [tok, settok] = useState(false);
  const [bookId, setBook] = useState(false);
  const [uidId, setuid] = useState(false);

  const saveAddress = (e) => {
    setaddress(e.target.value);
  };
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token != null && token != undefined && token != "") {
      setLog(true);
      settok(token);
      setuid(sessionStorage.getItem("uid"));
    } else {
      navigate("/login");
    }
    const bookId = sessionStorage.getItem("bookId");
    console.log("bookId is", bookId);
    if (
      bookId != null &&
      bookId != undefined &&
      bookId != "" &&
      bookId != false
    ) {
      setBook(bookId);
    } else {
      navigate("/Bookmain");
    }
  }, []);
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
    toast.success("order Succesfully!", {
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

  const Pay = (e) => {
    e.preventDefault();

    let postData = {
      address: Address,
      bookId: bookId,
      userId: uidId,
    };
    axios
      .post("http://localhost:3008/api/order/add", qs.stringify(postData), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          authorization: tok,
        },
      })
      .then((data) => {
        console.log(data);
        data.data.success ? successNotify() : dangerNotify(data.data.message);
      });
  };

  if (isLog) {
    return (
      <>
        <section className="order py-5 border-top-1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-8 align-item-center">
                <div className="border shadow">
                  <h3 className="bg-gray p-4" style={{ color: "#366858" }}>
                    Enter Delivery Address
                  </h3>
                  <form action="">
                    <fieldset className="p-4">
                      <ToastContainer />

                      <textarea
                        type="text"
                        placeholder="Enter Address"
                        className="form-control border p-3 w-100 my-2"
                        value={Address}
                        onChange={saveAddress}
                      ></textarea>

                      <button
                        type="submit"
                        className="form-control d-block py-3 px-5 border-0 rounded mt-3"
                        onClick={Pay}
                        style={{
                          color: " #caf7e2",
                          backgroundColor: " #4e917d",
                        }}
                      >
                        PAY
                      </button>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return navigate("/login/");
  }
}
