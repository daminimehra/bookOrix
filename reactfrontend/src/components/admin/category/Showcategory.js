import axios from "axios";
import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { baseAdmin, token } from "../../../config/config";
import { baseImageUrl } from "../../../config/config";
import BeatLoader from "react-spinners/BeatLoader";
import EditCategory from "./Editcategory";
class Showcategory extends Component {
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
        baseAdminURL + "/category/all",
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
          <Link to="/admin/addcategory" className="btn btn-primary pull-right">
            Add Category
          </Link>

          <table className="table">
            <thead>
              <tr>
                <th>
                  <h4>S.No</h4>
                </th>
                <th>
                  <h4>Category Name</h4>
                </th>
                <th>
                  <h4>Image</h4>
                </th>
                <th>
                  <h4>Edit</h4>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.categories.map((catname, index) => (
                <tr key={index + 1}>
                  <td>
                    <h5>{index + 1}</h5>
                  </td>
                  <td>
                    <h5>{catname.name}</h5>
                  </td>
                  <td>
                    <img
                      src={`${baseImageUrl}/${catname.image}`}
                      alt="Image"
                      style={{ width: "50px" }}
                    />
                  </td>

                  {/* <td><button className="btn btn-outline-danger"
                            onClick={()=>this.deleteCat(catname._id)}
                            >Trash</button></td> */}
                  <td>
                    <Link
                      to={"/admin/editCat/" + catname._id}
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
export default Showcategory;
