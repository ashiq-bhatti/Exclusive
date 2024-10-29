import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import WishListPage from "./Pages/WishListPage";
import Page404 from "./Pages/Page404";
import SeasionHeader from "./Components/SeasionHeader";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import AboutPage from "./Pages/AboutPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <SeasionHeader />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/page404" element={<Page404 />} />
          <Route path="/product-detail-page" element={<ProductDetailsPage />} />

          <Route path="/wishlist" element={<WishListPage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
