import React from "react";
import Navbar from "../../components/Navar";
import Footer from "../../components/Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
