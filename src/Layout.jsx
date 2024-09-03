import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Loader from "./components/Loader/Loader";
const Layout = () => {
  const [loading, setLoading] = useState(true);
  let isMount = false;
  useEffect(() => {
    if (!isMount) {
      setInterval(() => {
        isMount = true;
        setLoading(false);
      }, 1000);
    }
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="w-[100vw] overflow-hidden">
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
