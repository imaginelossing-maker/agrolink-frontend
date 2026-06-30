import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function Login() {
  const [authMode, setAuthMode] = useState("login");
const [selectedRole, setSelectedRole] = useState("buyer");
const [fullname, setFullname] = useState("");
const navigate = useNavigate();

  const handleSubmit = (event) => {
  event.preventDefault();

  // Save user's name
  localStorage.setItem("username", fullname);

  if (selectedRole === "seller") {
    navigate("/seller-dashboard");
  } else {
    navigate("/buyer-dashboard");
  }
};
  return (
    <div className="min-h-screen bg-background text-on-background font-body-md overflow-x-hidden">
      <header className="w-full py-6 px-margin-mobile md:px-margin-desktop flex justify-center items-center">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-3xl">agriculture</span>
          <h1 className="font-headline-md text-headline-md text-primary tracking-tight">AgroLink Nigeria</h1>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-margin-mobile py-8 md:py-12">
        <div className="w-full max-w-lg">
          <div className="mb-8">
            <h2 className="font-title-lg text-title-lg text-center mb-6">Choose your role</h2>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setSelectedRole("buyer")}
                className={`role-card flex flex-col items-center p-6 rounded-xl border border-outline-variant bg-surface-container-lowest transition-all hover:shadow-md group ${
                  selectedRole === "buyer" ? "active-role" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-on-secondary-container">shopping_cart</span>
                </div>
                <span className="font-label-md text-label-md font-bold">Buyer</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedRole("seller")}
                className={`role-card flex flex-col items-center p-6 rounded-xl border border-outline-variant bg-surface-container-lowest transition-all hover:shadow-md group ${
                  selectedRole === "seller" ? "active-role" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-on-primary-fixed">agriculture</span>
                </div>
                <span className="font-label-md text-label-md font-bold">Seller (Farmer)</span>
              </button>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant/30 overflow-hidden">
            <div className="flex border-b border-outline-variant/20 p-1 bg-surface-container-low">
              <button
                type="button"
                onClick={() => setAuthMode("login")}
                className={`flex-1 py-3 font-label-md text-label-md rounded-lg transition-all font-bold ${
                  authMode === "login"
                    ? "bg-white shadow-sm text-primary"
                    : "text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setAuthMode("signup")}
                className={`flex-1 py-3 font-label-md text-label-md rounded-lg transition-all ${
                  authMode === "signup"
                    ? "bg-white shadow-sm text-primary"
                    : "text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                Sign Up
              </button>
            </div>
            <div className="p-8">
              <form className="space-y-5" onSubmit={handleSubmit}>
                {authMode === "signup" && (
                  <div className="transition-all duration-300" id="field-name">
                    <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 ml-1" htmlFor="fullname">
                      Full Name
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">person</span>
                     <input
  className="w-full pl-12 pr-4 py-3 rounded-xl border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 bg-surface transition-all outline-none"
  id="fullname"
  value={fullname}
  onChange={(e) => setFullname(e.target.value)}
  placeholder="Enter your full name"
  type="text"
/>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 ml-1" htmlFor="email">
                    Email Address
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">mail</span>
                    <input
                      className="w-full pl-12 pr-4 py-3 rounded-xl border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 bg-surface transition-all outline-none"
                      id="email"
                      placeholder="example@agrolink.ng"
                      required
                      type="email"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2 ml-1">
                    <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="password">
                      Password
                    </label>
                    <a className="font-label-sm text-label-sm text-primary hover:underline" href="#">
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">lock</span>
                    <input
                      className="w-full pl-12 pr-4 py-3 rounded-xl border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 bg-surface transition-all outline-none"
                      id="password"
                      placeholder="••••••••"
                      required
                      type="password"
                    />
                  </div>
                </div>

                {authMode === "signup" && (
                  <div className="transition-all duration-300" id="field-confirm">
                    <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 ml-1" htmlFor="confirm_password">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">verified</span>
                      <input
                        className="w-full pl-12 pr-4 py-3 rounded-xl border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 bg-surface transition-all outline-none"
                        id="confirm_password"
                        placeholder="Re-enter your password"
                        type="password"
                      />
                    </div>
                  </div>
                )}

                <div className="pt-2">
                    <button
  type="submit"
  className="w-full py-4 bg-primary text-on-background font-bold rounded-xl shadow-lg hover:bg-primary-container active:scale-[0.98] transition-all flex justify-center items-center gap-2"
>
  <span>
    {authMode === "login"
      ? "Log In to Account"
      : "Create Account"}
  </span>

  <span className="material-symbols-outlined text-[20px]">
    arrow_forward
  </span>
</button>
                </div>
                <p className="text-center font-label-sm text-label-sm text-on-surface-variant mt-4">
                  By continuing, you agree to our <a className="text-primary underline" href="#">Marketplace Rules</a> and <a className="text-primary underline" href="#">Privacy Policy</a>.
                </p>
              </form>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 opacity-80">
            <div className="flex items-start gap-3">
              <div className="mt-1 p-2 bg-secondary-container rounded-lg">
                <span className="material-symbols-outlined text-on-secondary-container">security</span>
              </div>
              <div>
                <h4 className="font-label-md text-label-md font-bold">Secure Transactions</h4>
                <p className="text-xs text-on-surface-variant">Escrow protection for every harvest trade.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 p-2 bg-primary-fixed rounded-lg">
                <span className="material-symbols-outlined text-on-primary-fixed">verified_user</span>
              </div>
              <div>
                <h4 className="font-label-md text-label-md font-bold">Verified Farmers</h4>
                <p className="text-xs text-on-surface-variant">Quality assurance through our tiering system.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
