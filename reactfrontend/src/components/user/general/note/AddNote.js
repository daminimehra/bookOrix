import axios from "axios";
import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
// import {Redirect} from 'react-routers';
// import baseAdminURL from '../../../constants'
import DataTable from "react-data-table-component";
import { baseAdmin, baseUser, token } from "../../../../config/config";
import { ToastContainer, toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import BeatLoader from "react-spinners/BeatLoader";
class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      note: "",
      subject: "",
      chapter: "",
      bookname: "",
      price: 0,
      categoryId: null,
      subcategoryId: null,
      isFree: false,
      notes: [],
      move: false,
      loading: false,
      css: {
        display: "block",
        margin: "0 auto",
        "border-color": "blue",
        "z-index": "1",
        position: "absolute",
        left: "500px",
        top: "100px",
      },
    };
  }
  componentDidMount() {
    //alert(sessionStorage.getItem("token"))
    this.setState({ loading: true });
    let baseAdminURL = baseUser;
    axios
      .post(
        baseAdminURL + "/category/all",
        {},
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            authorization: sessionStorage.getItem("token"),
          },
        }
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ loading: false });
        if (data.data.length > 0) {
          this.setState({ notes: data.data });
          this.setState({ categoryId: data.data[0]._id });
        } else {
          console.log("Error in Error");
        }
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }
  addCategoryService = (e) => {
    console.log("In Add Notes", this.state);
    e.preventDefault();
    this.setState({ loading: true });
    let baseAdminURL = baseUser;
    let formData = new FormData();

    formData.append("title", this.state.title);
    formData.append("subject", this.state.subject);
    formData.append("chapter", this.state.chapter);
    formData.append("bookname", this.state.bookname);
    formData.append("price", this.state.price);
    formData.append("categoryId", this.state.categoryId);
    // formData.append("subcategoryId", null)
    formData.append("isFree", this.state.isFree);
    formData.append("note_image", this.state.note, this.state.note.title);
    axios
      .post(baseAdminURL + "/notes/add", formData, {
        headers: {
          "content-type": "multipart/form-data",
          authorization: sessionStorage.getItem("token"),
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
  settitleField = (e) => {
    this.setState({ title: e.target.value });
  };
  setsubject = (e) => {
    this.setState({ subject: e.target.value });
  };
  setchapter = (e) => {
    this.setState({ chapter: e.target.value });
  };
  setbookname = (e) => {
    this.setState({ bookname: e.target.value });
  };
  setprice = (e) => {
    this.setState({ price: e.target.value });
  };
  setcategoryId = (e) => {
    this.setState({ categoryId: e.target.value });
    console.log("Cat", e.target.value);
  };
  setisFree = (e) => {
    this.setState({ isFree: e.target.value });
  };
  setnote = (e) => {
    this.setState({ note: e.target.files[0] });
  };
  render() {
    if (this.state.move) {
      return <Navigate to="/notes"></Navigate>;
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
          <div className="col-md-7 col-lg-7 col-xl-7 offset-xl-1">
            <Link to="/notes" className="btn btn-primary pull-right">
              Show Materials
            </Link>
            <form>
              <h2 style={{ color: "#366858" }}>Add Notes or Book</h2>
              <div className="form-outline mb-4">
                <label
                  className="form-label"
                  for="form3Example3"
                  style={{ color: "#366858" }}
                >
                  Title
                </label>
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  name={this.state.title}
                  onChange={this.settitleField}
                />
              </div>
              <div className="form-outline mb-4">
                <label
                  className="form-label"
                  for="form3Example3"
                  style={{ color: "#366858" }}
                >
                  subject
                </label>
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  name={this.state.subject}
                  onChange={this.setsubject}
                />
              </div>

              <div className="form-outline mb-4">
                <label
                  className="form-label"
                  for="form3Example3"
                  style={{ color: "#366858" }}
                >
                  chapter
                </label>
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  name={this.state.chapter}
                  onChange={this.setchapter}
                />
              </div>

              <div className="form-outline mb-4">
                <label
                  className="form-label"
                  for="form3Example3"
                  style={{ color: "#366858" }}
                >
                  bookname
                </label>
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  name={this.state.bookname}
                  onChange={this.setbookname}
                />
              </div>

              <div className="form-outline mb-4">
                <label
                  className="form-label"
                  for="form3Example3"
                  style={{ color: "#366858" }}
                >
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
                <label
                  className="form-label"
                  for="form3Example3"
                  style={{ color: "#366858" }}
                >
                  categoryId
                </label>
                <select
                  id="form3Example3"
                  className="form-control form-control-lg"
                  onChange={this.setcategoryId}
                >
                  {this.state.notes.map((element, index) => (
                    <option key={index + 1} value={element._id}>
                      {element.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-outline mb-4">
                <label
                  className="form-label"
                  for="form3Example3"
                  style={{ color: "#366858" }}
                >
                  Donate
                </label>
                <select
                  id="form3Example3"
                  className="form-control form-control-lg"
                  name={this.state.isFree}
                  onChange={this.setisFree}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>

              <div className="form-outline mb-3">
                <label
                  className="form-label"
                  for="form3Example4"
                  style={{ color: "#366858" }}
                >
                  note or book
                </label>
                <input
                  type="file"
                  name="note"
                  onChange={this.setnote}
                  style={{ color: "#366858" }}
                />
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  onClick={this.addCategoryService}
                  className="btn btn-primary btn-lg"
                >
                  Add Notes or Book
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default AddNote;
