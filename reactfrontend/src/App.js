import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/admin/auth/Login";
import AddCategory from "./components/admin/category/Addcategory";
import Showcategory from "./components/admin/category/Showcategory";
import Dashboard from "./components/admin/layout/Dashboard";
import About from "./components/user/general/About";
import Frontpage from "./components/user/general/Frontpage";
import Home from "./components/user/general/Home";

import "react-toastify/dist/ReactToastify.css";
import Editcategory from "./components/admin/category/Editcategory";
import Addproduct from "./components/admin/product/Addproduct";
import Showproduct from "./components/admin/product/Showproduct";
import Editproduct from "./components/admin/product/Editproduct";
import Order from "./components/admin/order/Order";
import Completeorder from "./components/admin/order/Completeorder";
import PendingOrder from "./components/admin/order/PendingOrder";
import Userlogin from "./components/user/general/login/Userlogin";
import Signup from "./components/user/general/Register/Signup";
import Bookmain from "./components/user/general/bookpage/Bookmain";
import Order2 from "./components/user/general/order/order";
import AllOrders from "./components/user/general/order/AllOrders";
import Note from "./components/user/general/note/Note";
import AddNote from "./components/user/general/note/AddNote";
import Notes2 from "./components/admin/note/Note";
import Adminhome from "./components/admin/Adminhome";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Frontpage />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Userlogin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="Bookmain" element={<Bookmain />} />
            <Route path="myorders" element={<AllOrders />} />

            <Route path="Order" element={<Order2 />} />
            <Route path="notes" element={<Note />} />
            <Route path="addnotes" element={<AddNote />} />
          </Route>
          <Route path="/admin" element={<Login />}></Route>
          <Route path="/admin" element={<Dashboard />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="addcategory" element={<AddCategory />} />
            <Route path="showcat" element={<Showcategory />} />
            <Route path="editCat/:id" element={<Editcategory />} />
            <Route path="/admin/home" element={<Adminhome />} />
            {/* <Route path="/admin" element={<Login/>}/> */}

            {/* <Route path="addsubcategory" element={<AddsubCategory/>}/> */}
            {/* <Route path="showsubcat" element={<Showsubcategory/>}/>
            <Route path="editsubCat/:id" element={<Editsubcategory/>}/> */}

            <Route path="addproduct" element={<Addproduct />} />
            <Route path="showpro" element={<Showproduct />} />
            <Route path="editPro/:id" element={<Editproduct />} />
            <Route path="orders" element={<Order />} />
            <Route path="completeorder" element={<Completeorder />} />
            <Route path="pendingorder" element={<PendingOrder />} />
            <Route path="notes" element={<Notes2 />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
