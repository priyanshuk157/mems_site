import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AccordianMain from "../components/AccordianMain";
import "./resources.css";

const Resources = () => {
  return (
    <>
      <div className="body">
        <div>
          <Navbar />
        </div>
        <div className="head">RESOURCES</div>
        <div>
          <AccordianMain />
        </div>
        
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Resources;
