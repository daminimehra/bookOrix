import axios from "axios";
import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
// import {Redirect} from 'react-routers';
// import baseAdminURL from '../../../constants'
import DataTable from "react-data-table-component";
import { baseAdmin, token } from "../../../config/config";
import { ToastContainer, toast } from "react-toastify";
import BeatLoader from "react-spinners/BeatLoader";
class Addproduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: "",
      author: "",
      price: 0,
      categoryId: null,
      subcategoryId: null,
      isForDonation: false,
      categories: [],
      move: false,
      loading: false,
      css: {
        display: "block",
        margin: "0 auto",
        "border-color": "blue",
        "z-index": "1",
        position: "absolute",
        left: "600px",
        top: "20px",
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
  addCategoryService = (e) => {
    console.log("In Add Product", this.state);
    e.preventDefault();
    this.setState({ loading: true });
    let baseAdminURL = baseAdmin;
    let formData = new FormData();

    formData.append("name", this.state.name);
    formData.append("author", this.state.author);
    formData.append("price", this.state.price);
    formData.append("categoryId", this.state.categoryId);
    // formData.append("subcategoryId", null)
    formData.append("subcategoryId", this.state.subcategoryId);
    formData.append("isForDonation", this.state.isForDonation);
    formData.append("book_image", this.state.image, this.state.image.name);

    axios
      .post(baseAdminURL + "/book/add", formData, {
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
  setauthor = (e) => {
    this.setState({ author: e.target.value });
  };
  setprice = (e) => {
    this.setState({ price: e.target.value });
  };
  setcategoryId = (e) => {
    this.setState({ categoryId: e.target.value });
  };
  setsubcategoryId = (e) => {
    this.setState({ subcategoryId: e.target.value });
  };
  setisForDonation = (e) => {
    this.setState({ isForDonation: e.target.value });
  };
  setImage = (e) => {
    this.setState({ image: e.target.files[0] });
  };
  render() {
    if (this.state.move) {
      return <Navigate to="/admin/showpro"></Navigate>;
    }
    return (
      <>
        <BeatLoader
          loading={this.state.loading}
          css={this.state.css}
          size={15}
        />
        <ToastContainer />
        <div className="row">
          <div
            className="col-md-7 col-lg-7 col-xl-7 offset-xl-1"
            style={{ color: "#4e917d" }}
          >
            <Link to="/admin/showpro" className="btn btn-primary pull-right">
              Show Product
            </Link>
            <form>
              <h2>Add New Product</h2>
              <div className="form-outline mb-4">
                <label className="form-label" for="form3Example3">
                  Name
                </label>
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  name={this.state.name}
                  onChange={this.setNameField}
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" for="form3Example3">
                  Author
                </label>
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  name={this.state.author}
                  onChange={this.setauthor}
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" for="form3Example3">
                  price
                </label>
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  name={this.state.price}
                  onChange={this.setprice}
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" for="form3Example3">
                  categoryId
                </label>
                <select
                  id="form3Example3"
                  className="form-control form-control-lg"
                  name={this.state.categoryId}
                  onChange={this.setcategoryId}
                >
                  {this.state.categories.map((element, index) => (
                    <option key={index + 1} value={element._id}>
                      {element.name}
                    </option>
                  ))}
                </select>
              </div>
              {/* <div className="form-outline mb-4">
                                <label className="form-label" for="form3Example3">subcategoryId</label>
                                <input type="text" id="form3Example3" className="form-control form-control-lg"
                                    name={this.state.subcategoryId} onChange={this.setsubcategoryId} />
                            </div> */}
              <div className="form-outline mb-4">
                <label className="form-label" for="form3Example3">
                  Donate
                </label>
                <select
                  id="form3Example3"
                  className="form-control form-control-lg"
                  name={this.state.isForDonation}
                  onChange={this.setisForDonation}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>

              <div className="form-outline mb-3">
                <label className="form-label" for="form3Example4">
                  Image
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
export default Addproduct;
