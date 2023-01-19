import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { baseAdmin, baseImageUrl, token } from "../../../config/config";
import BeatLoader from "react-spinners/BeatLoader";

import qs from "qs";

export default function Editcategory(props) {
  let param = useParams();
  let navigate = useNavigate();
  let [catId, setCatId] = useState(null);
  let [cat, setcat] = useState([]);
  let [change, setchange] = useState(false);
  let [loading, setloading] = useState(true);
  let [catName, setcatName] = useState("");
  let [catImage, setcatImage] = useState({});
  let [css, setcss] = useState({
    display: "block",
    margin: "0 auto",
    "border-color": "blue",
  });
  useEffect(() => {
    let id = param.id;
    setCatId(id);
    let baseAdminURL = baseAdmin;
    axios
      .post(baseAdminURL + "/category/single", qs.stringify({ _id: id }), {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          authorization: token,
        },
      })
      .then((response) => response.data)
      .then((data) => {
        setloading(false);
        if (data.success) {
          setcat(data.data);
          setcatName(data.data.name);
          setcatImage(data.data.image);
        } else {
          console.log("Issue ");
        }
      })
      .catch((err) => {
        setloading(false);
      });
  }, []);

  const onNameChange = (e) => {
    setcatName(e.target.value);
  };
  const fileupdate = (e) => {
    setcatImage(e.target.files[0]);
    setchange(true);
  };
  const updateCategory = (e) => {
    e.preventDefault();
    setloading(true);
    let formData = new FormData();
    formData.append("name", catName);
    formData.append("_id", catId);
    let baseAdminURL = baseAdmin;

    if (change) formData.append("category_image", catImage, catImage.name);
    axios
      .post(baseAdminURL + "/category/update", formData, {
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
          navigate("/admin/showcat");
        } else {
          alert("Category Not Updated");
        }
      });
  };

  return (
    <>
      {loading ? (
        <BeatLoader loading={loading} css={css} size={15} />
      ) : (
        <div className="row" style={{ color: "#4e917d" }}>
          <div className="col-md-7 col-lg-7 col-xl-7 offset-xl-1">
            <Link to="/admin/showcat" className="btn btn-primary pull-right">
              Show Category
            </Link>
            <form>
              <h2>Edit Category</h2>
              <div className="form-outline mb-4">
                <label className="form-label" for="form3Example3">
                  Category Name
                </label>
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  name="categoryName"
                  value={catName}
                  onChange={onNameChange}
                />
              </div>

              <div className="form-outline mb-3">
                <label className="form-label" for="form3Example4">
                  Image
                </label>
                <input type="file" name="image" onChange={fileupdate} />
                <img
                  src={`${baseImageUrl}/${catImage}`}
                  alt="Image"
                  style={{ width: "50px" }}
                />
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  onClick={updateCategory}
                  type="submit"
                  className="btn btn-primary btn-lg"
                >
                  Update Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
