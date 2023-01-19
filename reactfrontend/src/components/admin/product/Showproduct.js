import axios from "axios";
import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { baseAdmin, token } from "../../../config/config";
import { baseImageUrl } from "../../../config/config";
import BeatLoader from "react-spinners/BeatLoader";
class Showproduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      readyToRedirect: false,
      loading: true,
      css: {
        display: "block",
        margin: "0 auto",
        "border-color": "blue",
        "margin-left": "600px",
      },
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    let baseAdminURL = baseAdmin;
    axios
      .post(
        baseAdminURL + "/book/all",
        {},
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            authorization: token,
          },
        }
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ loading: false });

        if (data.data.length > 0) {
          this.setState({ categories: data.data });
        } else {
          console.log("Error in Error");
        }
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }
  deleteCat = (id) => {
    let x = window.confirm("Do you want to continue");
    if (x == true) {
      this.setState({ loading: true });
      let baseAdminURL = baseAdmin;
      axios
        .post(
          baseAdminURL + "/category/update",
          {},
          {
            headers: {
              "content-type": "application/x-www-form-urlencoded",
              authorization: token,
            },
          }
        )
        .then((response) => response.data)
        .then((data) => {
          this.setState({ loading: false });

          if (data.data.length > 0) {
            this.setState({ categories: data.data });
          } else {
            console.log("Error in Error");
          }
        })
        .catch((err) => {
          this.setState({ loading: false });
        });
    }
  };
  render() {
    if (this.state.readyToRedirect) return <Navigate to="/" />;
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
          <Link to="/admin/addproduct" className="btn btn-primary pull-right">
            Add Book
          </Link>

          <table className="table">
            <thead>
              <tr>
                <th>
                  <h3>S.No</h3>
                </th>
                <th>
                  <h3>Book Name</h3>
                </th>
                <th>
                  <h3>Image</h3>
                </th>
                <th>
                  <h3>Edit</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.categories.map((book, index) => (
                <tr key={index + 1}>
                  <td>
                    <h4>{index + 1}</h4>
                  </td>
                  <td>
                    <h4>{book.name}</h4>
                  </td>
                  <td>
                    <img
                      src={`${baseImageUrl}/${book.image}`}
                      alt="Image"
                      style={{ width: "50px" }}
                    />
                  </td>

                  {/* <td><button className="btn btn-outline-danger"
                            onClick={()=>this.deleteCat(book._id)}
                            >Trash</button></td> */}
                  <td>
                    <Link
                      to={"/admin/editpro/" + book._id}
                      className="btn btn-outline-primary btn-danger"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
    }
  }
}
export default Showproduct;
