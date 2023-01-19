import axios from "axios";
import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
// import {Redirect} from 'react-routers';
// import baseAdminURL from '../../../constants'
import DataTable from "react-data-table-component";
import { baseAdmin, token } from "../../../config/config";
import { ToastContainer, toast } from "react-toastify";
import BeatLoader from "react-spinners/BeatLoader";
class Addcategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: "",
      move: false,
      loading: false,
      css: {
        display: "block",
        margin: "0 auto",
        "border-color": "blue",
        "z-index": "1",
        position: "absolute",
        left: "550px",
        top: "20px",
      },
    };
  }
  componentDidMount() {}
  addCategoryService = (e) => {
    console.log("In Add Service", this.state);
    e.preventDefault();
    this.setState({ loading: true });
    let baseAdminURL = baseAdmin;
    let formData = new FormData();

    formData.append("name", this.state.name);
    formData.append("category_image", this.state.image, this.state.image.name);

    axios
      .post(baseAdminURL + "/category/add", formData, {
        headers: {
          "content-type": "multipart/form-data",
          authorization: token,
        },
      })
      .then((response) => response.data)
      .then((data) => {
        this.setState({ loading: false });

        if (data.success) {
          toast.success(data.message);
          this.setState({ move: true });
        } else {
          toast.error(data.message);
          this.setState({ move: true });
        }
      });
  };
  setNameField = (e) => {
    this.setState({ name: e.target.value });
  };
  setImage = (e) => {
    this.setState({ image: e.target.files[0] });
  };
  render() {
    if (this.state.move) {
      return <Navigate to="/admin/showcat"></Navigate>;
    }
    return (
      <>
        <BeatLoader
          loading={this.state.loading}
          css={this.state.css}
          size={150}
        />
        <ToastContainer />
        <div className="row">
          <div
            className="col-md-7 col-lg-7 col-xl-7 offset-xl-1"
            style={{ color: "#4e917d" }}
          >
            <Link to="/admin/showcat" className="btn btn-primary pull-right">
              Show Category
            </Link>
            <form>
              <h2>Add New Category</h2>
              <div className="form-outline mb-4">
                <label className="form-label" for="form3Example3">
                  <h4> Category Name</h4>
                </label>
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  name={this.state.name}
                  onChange={this.setNameField}
                />
              </div>

              <div className="form-outline mb-3">
                <label className="form-label" for="form3Example4">
                  <h4> Image </h4>
                </label>
                <input type="file" name="image" onChange={this.setImage} />
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  onClick={this.addCategoryService}
                  className="btn btn-primary btn-lg"
                >
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default Addcategory;
