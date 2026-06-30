import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import Login from "./pages/Login";
import BuyerDashboard from "./pages/buyerDashboard";
import SellerDashboard from "./pages/SellerDashboard";
import FarmerMarketplace from "./pages/farmermarket";
import FarmerInsights from "./pages/FarmerInsights";
import Profile from "./pages/Profile";
import FarmerProfile from "./pages/FarmerProfile";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";
import ProductManagement from "./pages/ProductManagement";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
        <Route path="/seller-dashboard" element={<SellerDashboard />} />
        <Route path="/marketplace" element={<FarmerMarketplace />} />
        <Route path="/farmer-marketplace" element={<FarmerMarketplace />} />
        <Route path="/insights" element={<FarmerInsights />} />
        <Route path="/farmer-insights" element={<FarmerInsights />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/farmer-profile" element={<FarmerProfile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-management" element={<ProductManagement />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}