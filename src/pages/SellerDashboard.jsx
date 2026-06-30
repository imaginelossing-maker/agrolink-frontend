import { useNavigate } from "react-router-dom";
import FarmerBottomNav from "../components/FarmerBottomNav";

export default function SellerDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col font-body-md text-body-md pb-24">
      <header className="w-full sticky top-0 z-50 shadow-sm dark:shadow-none bg-surface-container-lowest">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-title-lg">agriculture</span>
            <h1 className="text-title-lg font-headline-md text-primary tracking-tight">AgroLink Nigeria</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="md:hidden text-on-surface-variant hover:bg-surface-container-high p-2 rounded-full transition-colors">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button
              type="button"
              onClick={() => navigate("/profile")}
              className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold overflow-hidden border-2 border-primary-fixed shadow-sm"
            >
              <img
                alt="Farmer Profile"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdNlhYTQDir-CVXY2AXM11fJDFMgN3ObBYO8ZIxNs3uUXbsqVOnkG4NMAY7wVOW6cOxL4pHwta3lGczjWsZNgHblFwYBXg6vA4WoS4cypHHAtpNbdYWkDzWnmhc37qRiEBxwXNJKgUA3edpPVh8gTaXBADrl4_bxu04dlOWJu5JJ7MCWfs0ieVfopDwbOG5Cc3cgEj6TccqrBNAeaSxCAq6vVnE92VR9l89gcS8fK-H10UKdX3-Tq2cAElSLJ1YpMOIELDyNVX1A"
              />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-8 pb-24">
        <section className="mb-10">
          <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-on-surface mb-2">Welcome back, Amina</h2>
          <p className="text-on-surface-variant font-body-md">Monitor your farm's digital footprint and manage your harvest.</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop mb-12">
          <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/20 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-primary-container text-on-primary-container group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">inventory_2</span>
              </div>
              <span className="text-secondary font-label-md bg-secondary-container px-2 py-1 rounded-full">+12%</span>
            </div>
            <h3 className="text-on-surface-variant font-label-md mb-1">Total Products</h3>
            <p className="text-display-lg-mobile md:text-display-lg font-display-lg text-primary">142</p>
          </div>
          <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/20 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-secondary-container text-on-secondary-container group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <span className="text-on-surface-variant font-label-md opacity-70">Active Now</span>
            </div>
            <h3 className="text-on-surface-variant font-label-md mb-1">Active Listings</h3>
            <p className="text-display-lg-mobile md:text-display-lg font-display-lg text-secondary">89</p>
          </div>
          <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/20 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">visibility</span>
              </div>
              <span className="text-tertiary font-label-md bg-tertiary-fixed px-2 py-1 rounded-full">+2.4k</span>
            </div>
            <h3 className="text-on-surface-variant font-label-md mb-1">Total Views</h3>
            <p className="text-display-lg-mobile md:text-display-lg font-display-lg text-tertiary">12.5k</p>
          </div>
        </section>

        <section className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 overflow-hidden shadow-sm">
          <div className="px-6 py-5 border-b border-outline-variant/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-title-lg font-headline-md text-on-surface">Product Management</h2>
              <p className="text-label-md text-on-surface-variant">Update your inventory and track listing status</p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-full text-on-surface hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-[20px]">filter_list</span>
                <span className="font-label-md">Filter</span>
              </button>
              <button
                type="button"
                onClick={() => navigate("/product-management")}
                className="hidden md:flex items-center gap-2 px-6 py-2 bg-primary text-on-primary rounded-full hover:bg-opacity-90 active:scale-95 transition-all shadow-md"
              >
                <span className="material-symbols-outlined">add</span>
                <span className="font-label-md">Add Product</span>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container text-on-surface-variant">
                  <th className="px-6 py-4 font-label-sm uppercase tracking-wider">Product</th>
                  <th className="px-6 py-4 font-label-sm uppercase tracking-wider">Category</th>
                  <th className="px-6 py-4 font-label-sm uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 font-label-sm uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                <tr className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-surface-variant flex-shrink-0">
                        <img
                          alt="Yam Tubers"
                          className="w-full h-full object-cover"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRxSzOxcFrm_8Cye5tNVl5v8qRiLwrCZRmysdm7arqOGVloYkP_SqwWtB39UggJPorkgc_mbaf__LBpomxPoITyWZyrz54CsYS-H3JXpLJQFF3vmpfxEYyuXTEZFzvNdcZBA_gg2fTLFG32bx0az9w_CZ_cwfxQsO7FfuAV8pEw_E9jxUrAyrqovNTX1-N1FqGb7retAp6q1V3NmvtqoR9vlyrrfL96y-rrxxRwxMZlY7w4uZr5L7ey1EV_5ovvQb3Pamll3cKlQ"
                        />
                      </div>
                      <span className="font-body-md text-on-surface font-semibold">Premium Yam Tubers</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-on-surface-variant font-label-md">Tubers & Roots</td>
                  <td className="px-6 py-4">
                    <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[12px] font-bold">Active</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 rounded-full text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container transition-colors">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                      <button className="p-2 rounded-full text-on-surface-variant hover:bg-error-container hover:text-on-error-container transition-colors">
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-surface-variant flex-shrink-0">
                        <img
                          alt="Red Chili"
                          className="w-full h-full object-cover"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHnwm-RQX8b8Vca_N-lqoaSa47sr7MHL9YRROftrUcsCRxnRLPFfGQfJO7D6YAbrlFEqKqmXtKSVddz3zAUz_7B8P3ZaaHqecaEpqnorxj50DBqbezjkC7Hw_v1Bl47N9aQVtRBSW7Ed0ITW_TlQAa0w34MVjWnT2Y3DlRAjgM9GZMr_15VIVDa41HzHCNo63aXu9FWUk0XEXyaUk6NSEvoUK4pXpgYWuWJWrj6_8LDSsdt9AaWcxiKq5ympz2AO3AJmyh_AZIzw"
                        />
                      </div>
                      <span className="font-body-md text-on-surface font-semibold">Red Chili Harvest</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-on-surface-variant font-label-md">Spices</td>
                  <td className="px-6 py-4">
                    <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[12px] font-bold">Active</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 rounded-full text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container transition-colors">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                      <button className="p-2 rounded-full text-on-surface-variant hover:bg-error-container hover:text-on-error-container transition-colors">
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <FarmerBottomNav />
    </div>
  );
}
