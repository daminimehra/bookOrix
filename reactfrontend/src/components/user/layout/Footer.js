import { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="w3l-footer-22 position-relative mt-5 pt-5">
          <div class="footer-sub">
            <div class="container">
              <h1 style={{ color: "#caf7e2 ", textAlign: "center" }}>
                Sign up to the bookOrix Newsletter
              </h1>

              <form>
                <input
                  type="text"
                  class="fromcontrol"
                  placeholder="Location"
                  id="inputsearch"
                />
                <input
                  type="email"
                  class="formcontrol"
                  placeholder="Enter your email address"
                  id="inputsearch"
                  required
                ></input>
                <select name="gender" class="formcontrol" id="inputsearch">
                  <option selected="selected">Gender</option>
                  <option value="">Male</option>
                  <option value="">Female</option>
                  <option value="">Other</option>
                  <option value="">Rather not say</option>
                </select>

                <input
                  class="inputsearchtwo"
                  type="submit"
                  id="btn"
                  value="Subscribe"
                ></input>
              </form>

              <div class="text-txt">
                <div class="row sub-columns">
                  <div class="col-lg-2 col-sm-6 sub-two-right">
                    <h6>About Us</h6>
                    <ul>
                      <li>
                        <a href="index.html">
                          <span class="fa fa-angle-double-right mr-2"></span>
                          Our Company
                        </a>
                      </li>
                      <li>
                        <a href="about.html">
                          <span class="fa fa-angle-double-right mr-2"></span>
                          Work with us
                        </a>
                      </li>
                      <li>
                        <a href="courses.html">
                          <span class="fa fa-angle-double-right mr-2"></span>
                          Publish With us
                        </a>
                      </li>
                      <li>
                        <a href="contact.html">
                          <span class="fa fa-angle-double-right mr-2"></span>
                          Newsroom
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-3 col-sm-6 sub-two-right pl-lg-5 mt-sm-0 mt-4">
                    <h6>Useful Links</h6>
                    <ul>
                      <li>
                        <a href="#live">
                          <span class="fa fa-angle-double-right mr-2"></span>
                          Privacy and Cookies
                        </a>
                      </li>
                      <li>
                        <a href="#faq">
                          <span class="fa fa-angle-double-right mr-2"></span>
                          Terms and Conditions
                        </a>
                      </li>
                      <li>
                        <a href="#support">
                          <span class="fa fa-angle-double-right mr-2"></span>
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="#terms">
                          <span class="fa fa-angle-double-right mr-2"></span>
                          FAQs
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-3 col-sm-6 sub-one-left mt-lg-0 mt-sm-5 mt-4">
                    <h6>Conatct us </h6>
                    <div class="column2">
                      <div class="href1">
                        <span
                          class="fa fa-envelope-o"
                          aria-hidden="true"
                        ></span>
                        <a href="mailto:info@example.com">bookorix@gmail.com</a>
                      </div>
                      <div class="href2">
                        <span class="fa fa-phone" aria-hidden="true"></span>
                        <a href="tel:+44-000-888-999">62802-89130</a>
                      </div>
                      <div>
                        <p class="contact-para">
                          <span
                            class="fa fa-map-marker"
                            aria-hidden="true"
                          ></span>
                          Studious, Main Market8H66+6JQ
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6 sub-one-left ab-right-cont pl-lg-5 mt-lg-0 mt-sm-5 mt-4">
                    <h6>Connect With Us </h6>
                    <p>
                      Our website is best platform to provide you low cost and
                      local authors books. Follow bookOrix{" "}
                    </p>
                    <div class="columns-2">
                      <ul class="social">
                        <li>
                          <a href="#facebook">
                            <span
                              class="fa fa-facebook"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </li>
                        <li>
                          <a href="#linkedin">
                            <span
                              class="fa fa-linkedin"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </li>
                        <li>
                          <a href="#twitter">
                            <span
                              class="fa fa-twitter"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </li>
                        <li>
                          <a href="#google">
                            <span
                              class="fa fa-google-plus"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </li>
                        <li>
                          <a href="#github">
                            <span
                              class="fa fa-github"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="copyright-footer text-center">
            <div class="container">
              <div class="columns">
                <p>@2023 bookOrix. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
