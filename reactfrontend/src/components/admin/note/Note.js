import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Component } from "react";
import { Navigate } from "react-router-dom";
import { baseAdmin, baseImageUrl, token } from "../../../config/config";
import BeatLoader from "react-spinners/BeatLoader";
import qs from "qs";
import { Link } from "react-router-dom";
//import  baseAdmin from '../../../../constants'
class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: [],
      img: "book_image",
      isLoggedIn: true,
      readyToRedirect: false,
      loading: true,
      css: {
        display: "block",
        margin: "0 auto",
        "border-color": "blue",
      },
    };
  }

  componentDidMount() {
    this.showAll({});
  }
  showAll(filter) {
    let postData = {};
    if (filter == undefined) postData = {};
    else postData.status = filter;
    this.setState({ loading: true });
    let url = `${baseAdmin}/notes/all`;
    axios
      .post(url, qs.stringify(postData))
      .then(({ data }) => {
        this.setState({ loading: false });

        if (data.success) {
          // toast.success(data.message)
          this.setState({ book: data.data });
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
  changerstatus = (e) => {
    let status = e.target.value.split("-");
    if (status != 0) {
      let x = window.confirm("Do you want to Change Status");
      if (x == true) {
        this.setState({ loading: true });
        let baseAdminURL = baseAdmin;
        let postData = {
          status: status[0],
          _id: status[1],
        };
        axios
          .post(baseAdminURL + "/notes/update", qs.stringify(postData), {
            headers: {
              "content-type": "application/x-www-form-urlencoded",
              authorization: token,
            },
          })
          .then((response) => response.data)
          .then((data) => {
            this.setState({ loading: false });
            this.showAll();
            if (data.data.length > 0) {
            } else {
              console.log("Error in Error");
            }
          })
          .catch((err) => {
            this.setState({ loading: false });
          });
      }
    }
  };
  filterdAta(e) {
    if (e.target.value != 0) {
      // this.setState({loading:true})
      let url = `${baseAdmin}/notes/all`;
      axios
        .post(url, qs.stringify({ status: e.target.value }))
        .then(({ data }) => {
          // this.setState({loading:false})
          if (data.success) {
            // toast.success(data.message)
            this.setState({ book: data.data });
            window.location.reload();
          } else {
            toast.warning(data.message);
          }
        })
        .catch((err) => {
          this.setState({ loading: false });

          console.log("Error in ", err);
        });
    }
  }
  render() {
    if (!this.state.isLoggedIn) {
      return <Navigate to="/Note" />;
    }
    if (this.state.navigate) {
      return <Navigate to={this.state.navigate} />;
    }

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
          <select className="form-control" onChange={this.filterdAta}>
            <option value="0">All</option>
            <option value="true">Approved</option>
            <option value="false">Not Approved</option>
          </select>
          <table className="table">
            <thead>
              <tr>
                <th>
                  <h4>S.No</h4>
                </th>
                <th>
                  <h4>Title</h4>
                </th>
                <th>
                  <h4>Added By</h4>
                </th>
                <th>
                  <h4>Subject</h4>
                </th>
                <th>
                  <h4>Chapter</h4>
                </th>
                <th>
                  <h4>Bookname</h4>
                </th>
                <th>
                  <h4>Content</h4>
                </th>
                <th>
                  <h4>Is Free</h4>
                </th>
                <th>
                  <h4>Is Free</h4>
                </th>
                <th>
                  <h4>Current Status</h4>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.book.map((order, index) => (
                <tr key={index + 1}>
                  <td>{index + 1}</td>
                  <td>{order.title}</td>
                  <td>{order.sellerId.name}</td>
                  <td>{order.subject}</td>
                  <td>{order.chapter}</td>
                  <td>{order.bookname}</td>
                  <td>
                    {" "}
                    <a href={`${baseImageUrl}/${order.note}`} target="_blank">
                      Full View
                    </a>
                  </td>
                  <td>{order.isFree ? "Yes" : "No"}</td>
                  <td>{order.price}</td>
                  <td>{order.status ? "Approved" : "Not Approved"}</td>

                  <td>
                    <select
                      className="form-control "
                      onChange={this.changerstatus}
                    >
                      <option value="0">---Select Operation---</option>
                      <option value={`true-${order._id}`}>Approved</option>
                      <option value={`false-${order._id}`}>Not Approved</option>
                    </select>
                  </td>

                  {/* <td><Link to={"/admin/editCat/"+order._id} className="btn btn-outline-primary btn-danger">Edit</Link></td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
    }
  }
}
export default Note;
