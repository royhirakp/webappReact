// import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import PaymentHistoryPage from "../pages/PaymentHistoryPage";

const AppRoute = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/history" element={<PaymentHistoryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoute;

// import Landingpage from "./components/LoadingPage/landing_page";
// import Postview from "./components/PostView/postview";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CreatePost from "./components/CreatePost/CreatePost";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Landingpage />} />
//           <Route path="/create" element={<CreatePost />} />
//           <Route path="/post" element={<Postview />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
