import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Component } from "react";
import { Navigate } from "react-router-dom";
import { baseUser, baseImageUrl } from "../../../../config/config";
import BeatLoader from "react-spinners/BeatLoader";
import qs from "qs";
import QuizComp from "./QuizComp";
import { Link } from "react-router-dom";
import QuizComtwo from "./QuizComtwo";
import QuizCompthree from "./Qthree";
import QuizCompfour from "./Qfour";
//import  baseUser from '../../../../constants'
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
        "margin-left": "550px",
      },
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    let url = `${baseUser}/notes/all`;
    axios
      .post(url, qs.stringify({ status: true }))
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
          <section class="w3l-homeblock1 slidecontainer">
            <div class="w3-services-ab py-5">
              <div class="container py-md-5 py-4">
                <div class="title-heading-w3 text-center mx-auto mb-5 pb-sm-4">
                  <h3 class="title-main" style={{ color: "white" }}>
                    Catch up on{" "}
                    <span style={{ color: " #caf7e2" }}>what we're doing</span>
                  </h3>
                </div>
                <div class="w3-services-grids pb-sm-5 mb-sm-4 slidecontainertwo">
                  <div class="row w3-services-right-grid">
                    <div class="col-xl-4"></div>
                    <div class="col-xl-8">
                      <div class="fea-gd-vv row responsive">
                        <div class="col-md-6">
                          <div class="d-flex align-items-center feature-gd ">
                            <div class="iconinfo">
                              <h5> Easy Access</h5>
                              <p>Quizzes</p>
                              <p>Book Accessories</p>
                              <p>Blogs</p>
                              <p>Audio Books</p>
                              <p>Free Notes & Books</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div class="gridcontainer">
            <section>
              <div class="productssection" id="act">
                <h1 style={{ marginTop: "2px" }}>Quizzes</h1>
                <div class="productgridtwoo">
                  <div class="productsitem">
                    <h3 className="hh">
                      How Well Do You Know ‘Stranger Things’?
                    </h3>
                    <br />
                    <QuizComp></QuizComp>
                  </div>
                  <div class="productsitem">
                    <h3 className="hh">Quiz on Parshu-Raam and Vishwamitra</h3>
                    <br />
                    <QuizCompfour></QuizCompfour>
                  </div>
                </div>
              </div>

              <div class="productssection" id="act" style={{ marginTop: "0" }}>
                <div class="productgridtwooo">
                  <div class="productsitem">
                    <h3>‘Harry Potter’?</h3>
                    <br />
                    <QuizCompthree></QuizCompthree>
                  </div>
                  <div class="productsitem">
                    <h3>How Good is your Vocabulary?</h3>
                    <br />
                    <QuizComtwo></QuizComtwo>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <section>
            <div class="title-heading-w3 text-center mx-auto mb-5 pb-sm-4">
              <h3 class="title-main">
                Book<span> Accessories</span>
              </h3>
            </div>
            <div class="gridcontainer">
              <section>
                <div class="productssectionone" id="act">
                  <div class="productgridthreee">
                    <div class="productsitemone">
                      <br />
                      <img src="assets/images/a1.jpeg"></img>
                      <h3>Scented Candles</h3>
                      <span>Click here</span>
                    </div>
                    <div class="productsitemone">
                      <br />
                      <img src="assets/images/1.jpg"></img>
                      <h3>Book Sleeves</h3>
                      <span>Click here</span>
                    </div>

                    <div class="productsitemone">
                      <br />
                      <img src="assets/images/a3.jpg"></img>
                      <h3>Reading Lamps</h3>
                      <span>Click here</span>
                    </div>
                    <div class="productsitemone">
                      <br />
                      <img src="assets/images/a4.jpg"></img>
                      <h3>Bookmarks</h3>
                      <span>Click here</span>
                    </div>
                    <div class="productsitemone">
                      <br />
                      <img src="assets/images/aa.jpeg"></img>
                      <h3>Floating Bookshelves</h3>
                      <span>Click here</span>
                    </div>
                    <div class="productsitemone">
                      <br />
                      <img src="assets/images/a51.webp"></img>
                      <h3>Book Darts</h3>
                      <span>Click here</span>
                    </div>
                    <div class="productsitemone">
                      <br />
                      <img src="assets/images/a5.webp"></img>
                      <h3>Bookish blankets</h3>
                      <span>Click here</span>
                    </div>
                    <div class="productsitemone">
                      <br />
                      <img src="assets/images/a6.jpg"></img>
                      <h3>Book Stamps</h3>
                      <span>Click here</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div class="blogs" id="blog">
              <h1>Read Blogs</h1>
              <div class="gridflex">
                <div class="column columnimage im1"></div>
                <div class="column columnright">
                  <div class="alignitem">
                    <h2>Bitcoin is the Detector of Imbeciles</h2>
                    <br />
                    <p>
                      &ldquo; Last year, 2022 was not of much respite for
                      cryptocurrencies. While bitcoin has lost more than 60% of
                      its value, the entire sector is in crisis, punctuated by
                      various bankruptcies such as those of Terra and FTX…
                    </p>
                    <br />
                    <button class="btntwo">
                      <a href="https://weworkremotely.com/how-to-keep-your-mental-health-in-check-when-you-work-from-home">
                        Read more
                      </a>
                    </button>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
              <div class="gridflex" style={{ marginTop: "3rem" }}>
                <div class="column columnimage im2">&nbsp;</div>
                <div class="column columnleft">
                  <div class="alignitem">
                    <h2>Do Not Disturb</h2>
                    <br />
                    <p>
                      &ldquo; Ever found yourself eagerly awaiting a message?
                      Your phone makes a *ding* that pierces your eardrums with
                      more discomfort than a Clean Bandit track. Your heart
                      races. You awkwardly sprint…
                    </p>
                    <br />
                    <button class="btntwo">
                      <a href="https://joebell.co.uk/blog/do-not-disturb">
                        Read more
                      </a>
                    </button>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <img class="audio" src="assets/images/audio.jpg"></img>
            <div class="productssection" id="lis">
              <div class="productgridtwo">
                <div class="productitem">
                  <img src="assets/images/chopra.jpg"></img>
                  <br />
                  <h2>A Place in My Heart</h2>
                  <span>
                    Anupama Chopra
                    <br />
                    <button class="btntwo">
                      <a
                        class="a"
                        href="https://penguin.co.in/book/a-place-in-my-heart/?tp=ab"
                        style={{ textAlign: "centre", margin: "auto" }}
                      >
                        Listen here
                      </a>
                    </button>
                    <br />
                  </span>
                </div>
                <div class="productitem">
                  <img src="assets/images/head.jpg"></img>
                  <br />
                  <h2>Head Held High</h2>
                  <span>
                    Vishwas Nangre Patil
                    <br />
                    <button class="btntwo">
                      <a
                        href="https://penguin.co.in/book/head-held-high/?tp=ab"
                        style={{ textAlign: "centre", margin: "auto" }}
                      >
                        Listen here
                      </a>
                    </button>
                    <br />
                  </span>
                </div>
                <div class="productitem">
                  <img src="assets/images/last.jpg"></img>
                  <br />
                  <h2>The Last White Man</h2>
                  <span>
                    Mohsin Hamid
                    <br />
                    <button
                      class="btntwo"
                      style={{ textAlign: "centre", margin: "auto" }}
                    >
                      <a
                        href="https://penguin.co.in/book/the-last-white-man/?tp=ab"
                        style={{ textAlign: "centre", margin: "auto" }}
                      >
                        Listen here
                      </a>
                    </button>
                    <br />
                  </span>
                </div>
                <div class="text-center mt-5">
                  <a
                    class="btn btn-style btn-style-secondary mt-sm-3"
                    href="/bookmain"
                    style={{
                      backgroundColor: " #caf7e2",
                      color: "#4e917d",
                      borderColor: " #caf7e2",
                    }}
                  >
                    View All
                    <i class="fa fa-arrow-right ml-2" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div class="blogs" id="blog">
            <h1>Free Books and Notes</h1>
          </div>
          <div class="rowtwo">
            {this.state.book.map((element, index) => (
              <div
                key={index + 1}
                className="col-md-4 
                            text-center"
              >
                <table className="table table-responsive table-bordered ">
                  <tbody>
                    <tr>
                      <th>Notes</th>
                      <td>{element.title}</td>
                    </tr>
                    <tr>
                      <th>Subject</th>
                      <td>{element.subject}</td>
                    </tr>
                    <tr>
                      <th>Chapter</th>
                      <td>{element.chapter}</td>
                    </tr>
                    <tr>
                      <th>Book Name</th>
                      <td>{element.bookname}</td>
                    </tr>
                    <tr>
                      <th>AddedBy</th>
                      <td>{element?.sellerId.name}</td>
                    </tr>
                    <tr>
                      <th>Notes</th>
                      <td>
                        <a
                          style={{ color: " #caf7e2" }}
                          target={`iframe${element._id}`}
                          href={`${baseImageUrl}/${element.note}`}
                        >
                          Open In Frame <br />
                        </a>
                        <a
                          style={{ color: " #caf7e2" }}
                          href={`${baseImageUrl}/${element.note}`}
                          target="_blank"
                        >
                          Full View
                        </a>
                        <iframe name={`iframe${element._id}`}></iframe>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </>
      );
    }
  }
}
export default Note;
