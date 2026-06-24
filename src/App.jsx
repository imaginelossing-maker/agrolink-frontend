import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function PageFrame({ page }) {
  return (
    <iframe
      src={`/designs/${page}.html`}
      style={{
        width: "100%",
        height: "100vh",
        border: "none"
      }}
      title={page}
    />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Navigate to="/login_sign_up_agrolink_nigeria" />}
        />

        <Route
          path="/buyer_dashboard_agrolink_nigeria"
          element={<PageFrame page="buyer_dashboard_agrolink_nigeria" />}
        />

        <Route
          path="/landing_page_agrolink_nigeria"
          element={<PageFrame page="landing_page_agrolink_nigeria" />}
        />

        <Route
          path="/login_sign_up_agrolink_nigeria"
          element={<PageFrame page="login_sign_up_agrolink_nigeria" />}
        />

        <Route
          path="/product_management_agrolink_nigeria"
          element={<PageFrame page="product_management_agrolink_nigeria" />}
        />

        <Route
          path="/seller_dashboard_agrolink_nigeria"
          element={<PageFrame page="seller_dashboard_agrolink_nigeria" />}
        />

      </Routes>
    </BrowserRouter>
  );
}