import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-on-background">
      <Navbar />
      <main>
        <section className="relative min-h-[751px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzc_RPXHQTTtZd9E6szPo2zGrXp7CtgqTIZ9WKXj0lSZPdLw-m0XOkzFl62CjteaKzcA4145Okn2s7MyhmeL9B1KOfyNqGNmVxd9iFZWGtyqvewkCm5E2ggOuywz_xcp0NVv0pPQEBYNbzFPnnOSn7dyc5YpuX3o4jUA3oMQ6IVL58VCkNa115YpMAMktmqlYl2a60I6moxxUav_UFrea8x2LoG1AQqRBvgYtszxRatC_sougmS9I2vH196mb_AWcXTcoBxx_xBw"
              alt="Farmer in field"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full grid grid-cols-1 md:grid-cols-2">
            <div className="max-w-xl">
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-6 leading-tight">
                Connecting Farmers and Buyers Across Africa
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
                Empowering Nigerian farmers with direct market access and sustainable growth. Join the digital marketplace designed for the modern agricultural harvest.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate("/login")}
                  className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md text-label-md hover:shadow-lg transition-all active:scale-95"
                >
                  Get Started
                </button>
                <button
                  onClick={() => navigate("/login")}
                  className="bg-surface-container-high border-2 border-outline-variant text-primary px-8 py-4 rounded-xl font-title-lg text-title-lg hover:bg-surface-container-highest transition-all active:scale-95"
                >
                  Login
                </button>
              </div>
              <div className="mt-12 flex gap-8">
                <div>
                  <p className="font-headline-md text-primary">15k+</p>
                  <p className="font-label-sm text-on-surface-variant">Verified Farmers</p>
                </div>
                <div>
                  <p className="font-headline-md text-primary">₦2.4B</p>
                  <p className="font-label-sm text-on-surface-variant">Trade Volume</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-on-background mb-4">
                Market-Leading Infrastructure
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
                Providing the tools necessary for Nigerian agriculture to thrive in a global digital economy.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-container/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">storefront</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-background mb-3">Direct Access</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Eliminate middlemen and connect directly with bulk buyers, increasing your profit margins by up to 40%.
                </p>
              </div>
              <div className="bg-primary-container text-on-primary-container p-8 rounded-xl shadow-lg transform md:-translate-y-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-on-primary-container text-3xl">verified_user</span>
                </div>
                <h3 className="font-title-lg text-title-lg mb-3">Verified Farmers</h3>
                <p className="font-body-md text-body-md opacity-90">
                  Every producer on our platform undergoes a rigorous vetting process to ensure quality and reliability for buyers.
                </p>
                <div className="mt-6 flex items-center gap-2">
                  <span className="text-label-sm font-label-sm">Learn about verification</span>
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-container/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">payments</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-background mb-3">Secure Payments</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Industry-leading escrow and instant disbursement systems ensure both parties are protected in every transaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 overflow-hidden relative">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-on-background mb-16 text-center">
              Voices from the Field
              
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 bg-surface-container p-8 rounded-2xl relative">
                <span className="material-symbols-outlined text-primary/20 text-6xl absolute top-4 right-8">format_quote</span>
                <p className="font-body-lg text-body-lg text-on-surface-variant italic mb-8 relative z-10">
                  "Before AgroLink, I struggled to find fair prices for my cocoa harvest. Now, I have buyers from across Nigeria bidding directly for my produce before I even harvest."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      alt="Farmer Avatar"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZjSf2rH8xqhHZq3Isd3F2CYvP4niDqkJYz2gFijgQUDKrfJ_dE-PrKExolRmbIC7enPAC7ew7X8OXQHaxiWfylufkAkY2VlXnHVJfItvOnev3-ZreqS5AAaz7j2IT9BIzMRUEOvwlg17BTC3u1YHYC4gDGzHxzDPAE0zjr7kVtGFa1ngsK4cnddOHbbpY6W_z2jVVPx_h2gHWd9yzqZyh9Cksj_E5Xy1n4lETFHAwFJ3wFlwY7tjAVQ6mLV84EUIjYttXBB2_NQ"
                    />
                  </div>
                  <div>
                    <h4 className="font-title-lg text-title-lg text-on-background">Ibrahim Lawal</h4>
                    <p className="font-label-sm text-primary">Cocoa Farmer, Ondo State</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
