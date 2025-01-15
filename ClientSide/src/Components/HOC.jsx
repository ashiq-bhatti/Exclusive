import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import SeasionHeader from "./SeasionHeader";

const HOC = (OldComponents) => {
  return function EnhancedFunction(props) {
    const [searchProduct, setSearchProduct] = useState("");

    return (
      <div>
        <SeasionHeader />
        <NavBar searchProduct={searchProduct} setSearchProduct={setSearchProduct} />
        <OldComponents {...props} />
        <Footer />
      </div>
    );
  };
};

export default HOC;
