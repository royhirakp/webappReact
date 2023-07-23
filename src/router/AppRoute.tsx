// import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import PaymentHistoryPage from "../pages/PaymentHistoryPage";
import WelcomePage from "../pages/WelcomePage";

const AppRoute = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/history" element={<PaymentHistoryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoute;
