import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mainContainer">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
