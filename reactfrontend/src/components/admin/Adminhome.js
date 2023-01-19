import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseAdmin, token } from "../../config/config";

export default function Adminhome() {
  const [bookno, setbookno] = useState([]);
  const params = useParams();

  useEffect(() => {
    allbookno();
  }, []);
  const allbookno = () => {
    let base = baseAdmin;
    let url = base + "/api/book/all";
    let head = {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        authorization: token,
      },
    };
    axios
      .get(url, head)
      .then((response) => {
        setbookno(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <marquee direction="left to right">
        <h1 style={{ margin: "80px", color: "#4e917d" }}>
          WELCOME TO ADMIN PANEL
        </h1>
      </marquee>
      <div class="row">
        <div
          class="col bg-light"
          style={{ borderRadius: "10px", margin: "5px", color: "#4e917d" }}
        >
          <h3>
            Total Categories: 16
            <br />
            <br />
            <p> [Add Category, Edit Category and Show All Categories]</p>
          </h3>
        </div>
        <div
          class="col bg-light"
          style={{ borderRadius: "10px", margin: "5px", color: "#4e917d" }}
        >
          <>
            <h3>
              Total Books: 100
              <p></p>
              <p> [Add Category, Edit Category and Show All Categories]</p>
            </h3>
          </>
        </div>
        <div
          class="col bg-light"
          style={{ borderRadius: "10px", margin: "5px", color: "#4e917d" }}
        >
          <h3>
            Total Orders: 14
            <br />
            <br />
            <p>[All Orders,Shipped Orders and New Orders]</p>
          </h3>
        </div>
        <div
          class="col bg-light"
          style={{ borderRadius: "10px", margin: "5px", color: "#4e917d" }}
        >
          <h3>
            Total Notes: 10
            <br />
            <br></br>
            <p> [Add Notes, Edit Notes and Show All Notes]</p>
          </h3>
        </div>
      </div>
    </>
  );
}
