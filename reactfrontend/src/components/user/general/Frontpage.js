import { Component } from "react";
import { Link } from "react-router-dom";
import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
const fadeImages = [
  {
    url: "assets/images/slide1.jpg",
  },
  {
    url: "assets/images/slide5.jpg",
  },
  {
    url: "assets/images/slide4.jpg",
  },
];
class Frontpage extends Component {
  render() {
    return (
      <>
        <div className="slide-container slidecontainer">
          <Fade>
            {fadeImages.map((fadeImage, index) => (
              <div className="each-fade" key={index}>
                <div className="image-container">
                  <img
                    src={fadeImage.url}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <h2>{fadeImage.caption}</h2>
              </div>
            ))}
          </Fade>
        </div>
        <div class="title-heading-w3 text-center mx-auto mb-5 pb-sm-4">
          <h3 class="title-main">
            Read a book<span> hot off the press!</span>
          </h3>
        </div>
        <div class="gridcontainer">
          <div class="griditem griditem1"></div>
          <section>
            <div class="productssection" id="act">
              <div class="productgridtwo">
                <div class="productsitem">
                  <br />
                  <img src="assets/images/nitopadesha.jpg"></img>
                  <h3>The Nitopadesha</h3>
                  <span>Nitin Pai</span>
                </div>
                <div class="productsitem">
                  <br />
                  <img src="assets/images/Ranjit.jpg"></img>
                  <h3>Kathmandu Dilemma</h3>
                  <span>Ranjit Rae</span>
                </div>

                <div class="productsitem">
                  <br />
                  <img src="assets/images/health.jpg"></img>
                  <h3>Hacking Health</h3>
                  <span>Mukesh Bansal</span>
                </div>
                <div class="productsitem">
                  <br />
                  <img src="assets/images/nisha.jpg"></img>
                  <h3>Nisha Small</h3>
                  <span>C.G. Salamander</span>
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
        </div>
        <div class="title-heading-w3 text-center mx-auto mb-5 pb-sm-4">
          <h3 class="title-main">
            All-time <span> bestsellers</span>
          </h3>
        </div>
        <div class="gridcontainer">
          <section>
            <div class="productssectionone" id="act">
              <div class="productgridthree">
                <div class="productsitemone">
                  <br />
                  <img src="assets/images/priyanka.jpg"></img>
                  <h3>Unfinished</h3>
                  <span>Priyanka Chopra Jonas</span>
                </div>
                <div class="productsitemone">
                  <br />
                  <img src="assets/images/atom.jpg"></img>
                  <h3>Atomic Habits</h3>
                  <span>James Clear</span>
                </div>

                <div class="productsitemone">
                  <br />
                  <img src="assets/images/hoover.jpg"></img>
                  <h3>It Starts with Us</h3>
                  <span>Colleen Hoover</span>
                </div>
                <div class="productsitemone">
                  <br />
                  <img src="assets/images/suda.jpg"></img>
                  <h3>Three Thousand Stitches</h3>
                  <span>Sudha Murty</span>
                </div>
                <div class="text-center mt-5">
                  <a
                    class="btn btn-style btn-style-secondary mt-sm-3"
                    href="/bookmain"
                  >
                    View All
                    <i class="fa fa-arrow-right ml-2" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="title-heading-w3 text-center mx-auto mb-5 pb-sm-4">
          <h3 class="title-main">
            Do facts interest you <span>more than fiction?</span>
          </h3>
        </div>
        <div class="gridcontainer">
          <section>
            <div class="productssection" id="act">
              <div class="productgridtwo">
                <div class="productsitem">
                  <br />
                  <img src="assets/images/souf.jpg"></img>
                  <h3>Souffle</h3>
                  <span>Anand Ranganathan</span>
                </div>
                <div class="productsitem">
                  <br />
                  <img src="assets/images/clan.jpg"></img>
                  <h3>Shurjo’s Clan</h3>
                  <span>Iffat Nawaz</span>
                </div>

                <div class="productsitem">
                  <br />
                  <img src="assets/images/sanjeev.jpg"></img>
                  <h3>China Room</h3>
                  <span>Sunjeev Sahota</span>
                </div>
                <div class="productsitem">
                  <br />
                  <img src="assets/images/blind.jpg"></img>
                  <h3>The Blind Matriarch</h3>
                  <span>Gokhale Namita</span>
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
        </div>
        <div class="title-heading-w3 text-center mx-auto mb-5 pb-sm-4">
          <h3 class="title-main">
            In the mood for <span>a good story?</span>
          </h3>
        </div>
        <div class="gridcontainer">
          <section>
            <div class="productssectionone" id="act">
              <div class="productgridthree">
                <div class="productsitemone">
                  <br />
                  <img src="assets/images/slow.jpg"></img>
                  <h3>Slow is Beautiful</h3>
                  <span>Ahlawat Gunjan</span>
                </div>
                <div class="productsitemone">
                  <br />
                  <img src="assets/images/pun.jpg"></img>
                  <h3>Panjab</h3>
                  <span>Amandeep Sandhu</span>
                </div>

                <div class="productsitemone">
                  <br />
                  <img src="assets/images/hill.jpg"></img>
                  <h3>Anthill</h3>
                  <span>Vinoy Thomas, Nandakumar K.</span>
                </div>
                <div class="productsitemone">
                  <br />
                  <img src="assets/images/99.jpg"></img>
                  <h3>99 Not Out!</h3>
                  <span>Sujata Kelkar Shetty</span>
                </div>
                <div class="text-center mt-5">
                  <a
                    class="btn btn-style btn-style-secondary mt-sm-3"
                    href="/bookmain"
                  >
                    View All
                    <i class="fa fa-arrow-right ml-2" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="title-heading-w3 text-center mx-auto mb-5 pb-sm-4">
          <h3 class="title-main">
            Looking to read <span>a timeless tale?</span>
          </h3>
        </div>
        <div class="gridcontainer">
          <section>
            <div class="productssection" id="act">
              <div class="productgridtwo">
                <div class="productsitem">
                  <br />
                  <img src="assets/images/yusuf.jpg"></img>
                  <h3>Yusuf’s Fragrance</h3>
                  <span>Mufti Mudasir, Mahmud Gami</span>
                </div>
                <div class="productsitem">
                  <br />
                  <img src="assets/images/das.jpg"></img>
                  <h3>Malloban</h3>
                  <span>Jibanananda Das, Rebecca Whittington</span>
                </div>

                <div class="productsitem">
                  <br />
                  <img src="assets/images/vishnu.jpg"></img>
                  <h3>Vishnu Purana</h3>
                  <span>Bibek Debroy</span>
                </div>
                <div class="productsitem">
                  <br />
                  <img src="assets/images/rao.jpg"></img>
                  <h3>The Sacred Wordsmith</h3>
                  <span>Raja Rao</span>
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
        </div>
      </>
    );
  }
}
export default Frontpage;
