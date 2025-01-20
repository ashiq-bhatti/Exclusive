import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import WishListPage from "./Pages/WishListPage";
import Page404 from "./Pages/Page404";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import AboutPage from "./Pages/AboutPage";
import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckOutPage";

import AccountPage from "./Pages/AccountPage";
import VerifyOrderSpinner from "./Components/VerifyOrderSpinner";

import AdminLayout from "./Admin/AdminLaout";
import ProductAddpage from "./Admin/AdminPages/ProductAddpage";
import AllProducts from "./Admin/AdminPages/AllProducts";
import OrderPAge from "./Admin/AdminPages/OrderPAge";
import MyorderPage from "./Pages/MyorderPage";
import AllListedProducts from "./Components/AllProducts";
import ContactMessagesPage from "./Admin/AdminPages/ContactMessagePage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Page404 />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/page404" element={<Page404 />} />
          <Route
            path="/product-detail-page/:id"
            element={<ProductDetailsPage />}
          />
          <Route path="/cart-page" element={<CartPage />} />
          <Route path="/check-out-page" element={<CheckoutPage />} />
          <Route path="/account-page" element={<AccountPage />} />
          <Route path="/my-order-page" element={<MyorderPage />} />
          <Route path="/wishlist" element={<WishListPage />} />
          <Route path="/verify" element={<VerifyOrderSpinner />} />
          <Route path="/allListedProducts" element={<AllListedProducts />} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route
              index
              path="/admin/product-add"
              element={<ProductAddpage />}
            />
            <Route path="/admin/all-products" element={<AllProducts />} />
            <Route path="/admin/order" element={<OrderPAge />} />
            <Route path="/admin/message" element={<ContactMessagesPage />} />

          </Route>
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
