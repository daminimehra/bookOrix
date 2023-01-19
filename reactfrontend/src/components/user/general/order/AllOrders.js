import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Component } from "react";
import { Navigate } from "react-router-dom";
import { baseUser, baseImageUrl } from "../../../../config/config";
import BeatLoader from "react-spinners/BeatLoader";
import qs from "qs";
import { Link } from "react-router-dom";
//import  baseUser from '../../../../constants'
class Allorders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [],
      img: "book_image",
      isLoggedIn: true,
      readyToRedirect: false,
      loading: true,
      isBook: false,
      uidId: null,
      css: {
        display: "block",
        margin: "auto",
        "border-color": "blue",
        "margin-left": "550px",
      },
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
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
        this.setState({ loading: false });

        if (data.success) {
          // toast.success(data.message)
          this.setState({ order: data.data });
        } else {
          toast.warning(data.message);
        }
      })
      .catch((err) => {
        this.setState({ loading: false });

        console.log("Error in ", err);
      });
  }
  state = { redirect: null };

  render() {
    if (this.state.loading) {
      return (
        <>
          <BeatLoader
            loading={this.state.loading}
            css={this.state.css}
            size={15}
          />
        </>
      );
    } else {
      return (
        <>
          <ToastContainer />
          <div className="row">
            <div class="col-md-8 offset-2">
              <table
                className="table table-bordered"
                style={{ borderRadius: "5px" }}
              >
                <tr style={{ color: "white" }}>
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
                {this.state.order.map((element, index) => (
                  <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td>{element.address}</td>
                    <td>
                      {element.orderStatus == 1
                        ? "Order Placed"
                        : element.orderStatus == 2
                        ? "Order Confirmed"
                        : "Order Delivered"}
                    </td>
                    <td>{element.bookId.author}</td>
                    <td>{element.bookId.name}</td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </>
      );
    }
  }
}
export default Allorders;
