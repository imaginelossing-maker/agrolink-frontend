// backend integration with react router dom

import ProfileProvider from "./context/ProfileContext";
import TokenProvider from "./context/TokenContext";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/landingpage";
import Login from "./pages/Login";
import BuyerDashboard from "./pages/buyerDashboard";
import SellerDashboard from "./pages/SellerDashboard";

import BuyerMarketplace from "./pages/buyermarket";
import FarmerMarketplace from "./pages/FarmerMarketplace";

import FarmerInsights from "./pages/FarmerInsights";
import Profile from "./pages/Profile";
import FarmerProfile from "./pages/FarmerProfile";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";
import FarmerOrder from "./pages/FarmerOrder";
import ProductManagement from "./pages/ProductManagement";

export default function App() {
  return (
    <TokenProvider>
      <ProfileProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />

            <Route
              path="/buyer-dashboard"
              element={<BuyerDashboard />}
            />

            <Route
              path="/seller-dashboard"
              element={<SellerDashboard />}
            />

            <Route
              path="/marketplace"
              element={<BuyerMarketplace />}
            />

            <Route
              path="/farmer-marketplace"
              element={<FarmerMarketplace />}
            />

            <Route
              path="/insights"
              element={<FarmerInsights />}
            />

            <Route
              path="/farmer-insights"
              element={<FarmerInsights />}
            />

            <Route
              path="/profile"
              element={<Profile />}
            />

            <Route
              path="/farmer-profile"
              element={<FarmerProfile />}
            />

            <Route
              path="/farmer-order"
              element={<FarmerOrder />}
            />

            <Route
              path="/orders"
              element={<Orders />}
            />

            <Route
              path="/cart"
              element={<Cart />}
            />

            <Route
              path="/product-management"
              element={<ProductManagement />}
            />

            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </BrowserRouter>
      </ProfileProvider>
    </TokenProvider>
  );
}