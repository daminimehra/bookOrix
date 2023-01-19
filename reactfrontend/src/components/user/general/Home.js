import { Component, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
function Home() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default Home;
