import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { baseAdmin, baseImageUrl, token } from "../../../config/config";
import BeatLoader from "react-spinners/BeatLoader";
import qs from "qs";

export default function Editproduct(props) {
  let param = useParams();
  let navigate = useNavigate();
  let [bookId, setbookId] = useState(null);
  let [book, setbook] = useState([]);
  let [change, setchange] = useState(false);
  let [loading, setloading] = useState(true);
  let [categories, setcategories] = useState([]);
  let [bookName, setbookName] = useState("");

  let [bookImage, setbookImage] = useState({});
  let [css, setcss] = useState({
    display: "block",
    margin: "0 auto",
    "border-color": "blue",
  });
  useEffect(() => {
    let id = param.id;
    setbookId(id);
    let baseAdminURL = baseAdmin;
    axios
      .post(baseAdminURL + "/book/single", qs.stringify({ _id: id }), {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          authorization: token,
        },
      })
      .then((response) => response.data)
      .then((data) => {
        setloading(false);
        if (data.success) {
          setbook(data.data);
          setbookImage(data.data.image);
          setbookName(data.data.name);
          setbookauthor(data.data.author);
          setbookprice(data.data.price);
          setbookcategoryId(data.data.categoryId);
          setisForDonation(data.data.isForDonation);
        } else {
          console.log("Issue ");
        }
      })
      .catch((err) => {
        setloading(false);
      });
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
        if (data.data.length > 0) {
          setcategories(data.data);
        } else {
          console.log("Error in Error");
        }
      })
      .catch((err) => {});
  }, []);

  const onNameChange = (e) => {
    setbookName(e.target.value);
  };
  const fileupdate = (e) => {
    setbookImage(e.target.files[0]);
    setchange(true);
  };
  const updatebookegory = (e) => {
    e.preventDefault();
    setloading(true);
    let formData = new FormData();
    formData.append("name", bookName);
    formData.append("price", bookprice);
    formData.append("author", bookauthor);
    formData.append("categoryId", bookcategoryId);
    formData.append("isForDonation", isForDonation);
    formData.append("_id", bookId);
    let baseAdminURL = baseAdmin;

    if (change) formData.append("book_image", bookImage, bookImage.name);
    axios
      .post(baseAdminURL + "/book/update", formData, {
        headers: {
          "content-type": "multipart/form-data",
          authorization: token,
        },
      })
      .then((response) => response.data)
      .then((data) => {
        //this.setState({loading:false})
        setloading(false);

        if (data.success) {
          navigate("/admin/showpro");
        } else {
          alert("bookegory Not Updated");
        }
      });
  };

  let [bookauthor, setbookauthor] = useState("");
  const onauthorChange = (e) => {
    setbookauthor(e.target.value);
  };

  let [bookprice, setbookprice] = useState("");
  const onpriceChange = (e) => {
    setbookprice(e.target.value);
  };

  let [bookcategoryId, setbookcategoryId] = useState("");
  const oncategoryIdChange = (e) => {
    setbookcategoryId(e.target.value);
  };

  let [isForDonation, setisForDonation] = useState("");
  const onisForDonation = (e) => {
    setisForDonation(e.target.value);
  };
  return (
    <>
      {loading ? (
        <BeatLoader loading={loading} css={css} size={15} />
      ) : (
        <div className="row">
          <div className="col-md-7 col-lg-7 col-xl-7 offset-xl-1">
            <Link to="/admin/showpro" className="btn btn-primary pull-right">
              Show Book
            </Link>
            <form style={{ color: "#4e917d" }}>
              <h2>Edit Book</h2>
              <div className="form-outline mb-4">
                <label className="form-label" for="form3Example3">
                  Book Name
                </label>
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  name="bookName"
                  value={bookName}
                  onChange={onNameChange}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" for="form3Example3">
                  Book author
                </label>
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  name="author"
                  value={bookauthor}
                  onChange={onauthorChange}
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" for="form3Example3">
                  Book price
                </label>
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  name="price"
                  value={bookprice}
                  onChange={onpriceChange}
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" for="form3Example3">
                  Book categoryId
                </label>
                <select
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  name="categoryId"
                  value={bookcategoryId}
                  onChange={oncategoryIdChange}
                >
                  {categories.map((element, index) =>
                    element._id == bookcategoryId ? (
                      <option selected key={index + 1} value={element._id}>
                        {element.name}
                      </option>
                    ) : (
                      <option key={index + 1} value={element._id}>
                        {element.name}
                      </option>
                    )
                  )}
                </select>
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" for="form3Example3">
                  Is For Donation
                </label>
                <select
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  name="isForDonation"
                  value={isForDonation}
                  onChange={onisForDonation}
                >
                  {isForDonation ? (
                    <option value="true" selected>
                      Yes
                    </option>
                  ) : (
                    <option value="false">NO</option>
                  )}
                  {!isForDonation ? (
                    <option value="true">Yes</option>
                  ) : (
                    <option value="false">NO</option>
                  )}
                </select>
              </div>

              <div className="form-outline mb-3">
                <label className="form-label" for="form3Example4">
                  Image
                </label>
                <input type="file" name="image" onChange={fileupdate} />
                <img
                  src={`${baseImageUrl}/${bookImage}`}
                  alt="Image"
                  style={{ width: "50px" }}
                />
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  onClick={updatebookegory}
                  type="submit"
                  className="btn btn-primary btn-lg"
                >
                  Update bookegory
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
