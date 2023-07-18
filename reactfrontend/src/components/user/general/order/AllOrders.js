import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseUser } from "../../../../config/config";
import BeatLoader from "react-spinners/BeatLoader";
import qs from "qs";

const Allorders = () => {
  const [order, setOrder] = useState([]);
  const [isLoggedIn] = useState(true);
  const [loading, setLoading] = useState(true);
  const [css] = useState({
    display: "block",
    margin: "auto",
    borderColor: "blue",
    marginLeft: "550px",
  });

  useEffect(() => {
    setLoading(true);
    const token = sessionStorage.getItem("token");
    const uidId = sessionStorage.getItem("uid");
    let url = `${baseUser}/order/all`;
    let postData = {
      userId: uidId,
    };
    axios
      .post(url, qs.stringify(postData), {
        headers: {
           "Content-Type": "application/x-www-form-urlencoded",
          authorization: token,
        },
      })
      .then(({ data }) => {
        setLoading(false);
        if (data.success) {
          setOrder(data.data);
        } else {
          toast.warning(data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("Error in ", err);
      });
  }, []);

  if (loading) {
    return (
      <>
        <BeatLoader loading={loading} css={css} size={15} />
      </>
    );
  } else {
    return (
      <>
        <ToastContainer />
        <div className="row">
          <div className="col-md-8 offset-2">
            <table
              className="table table-bordered"
              style={{ borderRadius: "5px" }}
            >
              <thead style={{ color: "white" }}>
                <tr>
                  <th>
                    <h4>Sno</h4>{" "}
                  </th>
                  <th>
                    <h4>Address</h4>
                  </th>
                  <th>
                    {" "}
                    <h4>Status</h4>
                  </th>
                  <th>
                    {" "}
                    <h4>Book Author </h4>
                  </th>
                  <th>
                    {" "}
                    <h4>Book Name </h4>
                  </th>
                </tr>
              </thead>
              <tbody>
                {order.map((element, index) => (
                  <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td>{element.address}</td>
                    <td>
                      {element.orderStatus === 1
                        ? "Order Placed"
                        : element.orderStatus === 2
                        ? "Order Confirmed"
                        : "Order Delivered"}
                    </td>
                    <td>{element.bookId.author}</td>
                    <td>{element.bookId.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
};

export default Allorders;
