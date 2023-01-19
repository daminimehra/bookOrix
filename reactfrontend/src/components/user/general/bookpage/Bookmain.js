import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Component, useState } from "react";
import { Navigate } from "react-router-dom";
import { baseUser, baseImageUrl } from "../../../../config/config";
import BeatLoader from "react-spinners/BeatLoader";
import ReactPaginate from "react-paginate";
import FilterResults from "react-filter-search";
import { Link } from "react-router-dom";
import React from "react";
//import  baseUser from '../../../../constants'

class Bookmain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      book: [],
      offset: 0,
      perPage: 5,
      currentPage: 0,
      img: "book_image",
      isLoggedIn: true,
      readyToRedirect: false,
      loading: true,
      isBook: false,
      bookName: "",
      bookResult: [],
      css: {
        display: "block",
        margin: "auto",
        "border-color": "blue",
        "margin-left": "550px",
      },
    };
  }
  bookAdd = (e) => {
    console.log("Book Id is", e.target.value);
    sessionStorage.setItem("bookId", e.target.value);
    this.setState({ isBook: true });
  };

  changeName = (e) => {
    this.setState({ bookName: e.target.value });
  };

  componentDidMount() {
    this.setState({ loading: true });
    document.addEventListener("mousedown", this.onChange);
    let url = `${baseUser}/book/all`;
    axios
      .post(url, {})
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

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.onChange);
  }

  onChange = (e) => {
    if (this.node.current.contains(e.target)) {
      return;
    }
    this.setState({
      book: [],
    });
  };
  onUserChange = async (e) => {
    let url = `${baseUser}/book/all`;
    await axios
      .get(url, {})
      .then((res) => {
        this.setState({
          book: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    let filter = e.target.value.toLowerCase();

    let resUser = this.state.book.filter((e) => {
      let dataFilter = e.name.toLowerCase();
      return dataFilter.indexOf(filter) !== -1;
    });

    this.setState({
      book: resUser,
    });
  };

  state = { redirect: null };

  render() {
    if (this.state.isBook) {
      return <Navigate to="/order" />;
    }
    if (!this.state.isLoggedIn) {
      return <Navigate to="/bookmain" />;
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
          <main className="textCenter">
            <div class="ssection" id="lis">
              <form>
                <input
                  type="text"
                  class="fromcontrol"
                  placeholder="enter book"
                  id="search"
                  text-align="center"
                  ref={this.node}
                  onClick={this.onChange}
                  onChange={this.onUserChange}
                />
                <input
                  class="inputsearchtwo"
                  type="submit"
                  id="btn"
                  value="Search Book"
                ></input>
              </form>
            </div>
          </main>
          <div className="rowthree">
            {this.state.book.map((element, index) => (
              <div
                key={index + 1}
                className="col-md-2
                            text-center "
              >
                <img
                  height="250px"
                  margin="15px"
                  src={`${baseImageUrl}/${element.image}`}
                  alt={element.name}
                />
                <br />

                <h4>{element.name}</h4>
                <h5>{element.author}</h5>
                <br />
                <button
                  onClick={this.bookAdd}
                  value={element._id}
                  className="btn btn-primary btn-block"
                >
                  Buy Book
                </button>
                <br />
              </div>
            ))}
          </div>
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </>
      );
    }
  }
}
export default Bookmain;
