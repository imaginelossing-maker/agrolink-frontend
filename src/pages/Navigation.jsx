import { useContext } from "react";
import { TokenContext } from "../context/TokenContext";
import { Navigate, Route, Routes } from "react-router-dom";
import BuyerDashboard from "./buyerDashboard";
import SellerDashboard from "./SellerDashboard";
import FarmerMarketplace from "./buyermarket";
import FarmerInsights from "./FarmerInsights";
import Profile from "./Profile";
import FarmerProfile from "./FarmerProfile";
import FarmerOrders from "./FarmerOrder";
import Orders from "./Orders";
import Cart from "./Cart";
import ProductManagement from "./ProductManagement";
import LandingPage from "./landingpage";
import Login from "./Login";

export default function AppRoutes() {
  const tokenPayload = useContext(TokenContext);
  console.log(tokenPayload)

  return (
    <Routes>
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
            element={<FarmerMarketplace />}
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
            element={<FarmerOrders />}
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
            path="/*"
            element={<BuyerDashboard />}
          />
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={<Navigate to="/login" replace />}
          />
    </Routes>
  );
}