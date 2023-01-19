import { Outlet } from "react-router-dom";
import Footer from "../../user/layout/Footer";
import Headeradmin from "./Headeradmin";

function Dashboard() {
  return (
    <>
      <Headeradmin />
      <div>
        <Outlet />
      </div>
    </>
  );
}
export default Dashboard;
