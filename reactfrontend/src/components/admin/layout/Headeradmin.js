import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Headeradmin() {
  const [isLog, setLog] = useState();
  const logMeout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("token");
    setLog(false);
    window.location.href = "/admin";
  };
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token != null && token != undefined && token != "") {
      setLog(true);
    }
  }, [isLog]);
  return (
    <>
      <header
        id="site-header"
        class="fixed-top "
        style={{ background: " #fff" }}
      >
        <div class="container-fluid">
          <nav className="navbar navbar-expand-lg stroke">
            <nav className="nav">
              <div class="navbar-brand d-flex align-items-center">
                <div className="logo" style={{ color: "#4e917d" }}>
                  <h1>Admin Panel. </h1>
                </div>
              </div>
              <button
                className="navbar-toggler  collapsed bg-gradient"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                <span className="navbar-toggler-icon fa icon-close fa-times"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul
                  className="navbar-nav ml-lg-auto navlinks"
                  style={{
                    display: "flex",

                    justifyContent: "space-between",
                    fontSize: "30px",
                  }}
                >
                  <li className="nav-item">
                    <Link
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "21px",
                        justifyContent: "space-between",
                      }}
                      className="nav-link"
                      to="/admin/home"
                    >
                      Home
                    </Link>
                  </li>
                  <li class="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      to="/admin/showcat"
                    >
                      Category
                    </Link>
                    <ul class="dropdown-menu border-danger">
                      <li class="nav-item">
                        <Link className="nav-link" to="/admin/addcategory">
                          Add Category
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link className="nav-link" to="/admin/showcat">
                          Show Category
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link className="nav-link" to="/admin/showcat">
                          Edit Category
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* <li class="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle"  data-toggle="dropdown" to="/admin/showcat">SubCategory</Link>
                                    <ul class="dropdown-menu border-danger" >
                                        <li class="nav-item">
                                            <Link className="nav-link" to="/admin/addsubcategory">Add Subcategory</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link className="nav-link" to="/admin/showsubcat">Show Subcategory</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link className="nav-link" to="/admin/editsubcat">Edit Subcategory</Link>
                                        </li>
                                    </ul>
                                </li> */}
                  <li class="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      to="/admin/showpro"
                    >
                      Book
                    </Link>
                    <ul class="dropdown-menu border-danger">
                      <li class="nav-item">
                        <Link className="nav-link" to="/admin/addproduct">
                          Add Book
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link className="nav-link" to="/admin/showpro">
                          Show Book
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link className="nav-link" to="/admin/showpro">
                          Edit Book
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      to="/admin/orders"
                    >
                      Orders
                    </Link>
                    <ul class="dropdown-menu border-danger">
                      <li class="nav-item">
                        <Link className="nav-link" to="/admin/orders">
                          All Orders
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link className="nav-link" to="/admin/completeorder">
                          Shipped Orders
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link className="nav-link" to="/admin/pendingorder">
                          New Orders
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      to="/admin/notes"
                    >
                      Notes
                    </Link>
                    <ul class="dropdown-menu border-danger">
                      <li class="nav-item">
                        <Link className="nav-link" to="/admin/notes">
                          All Notes
                        </Link>
                      </li>
                      {/* <li class="nav-item">
                                            <Link className="nav-link" to="/admin/completeorder">Shipped Orders</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link className="nav-link" to="/admin/pendingorder">New Orders</Link>
                                        </li> */}
                    </ul>
                  </li>
                  {isLog ? (
                    <li class="nav-item">
                      <a className="nav-link" onClick={logMeout}>
                        Logout
                      </a>
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              </div>
              <div className="cont-ser-position">
                {/* <nav className="navigation">
                                <div className="theme-switch-wrapper">
                                    <label className="theme-switch" for="checkbox">
                                        <input type="checkbox" id="checkbox"/>
                                        <div className="mode-container">
                                            <i className="gg-sun"></i>
                                            <i className="gg-moon"></i>
                                        </div>
                                    </label>
                                </div>
                            </nav> */}
              </div>
            </nav>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Headeradmin;
