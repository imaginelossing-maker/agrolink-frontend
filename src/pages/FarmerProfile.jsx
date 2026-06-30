import { Link } from "react-router-dom";

export default function FarmerProfile() {
  return (
    <div className="min-h-screen bg-emerald-50 text-slate-900">
      <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-white shadow-xl overflow-hidden">
          <div className="bg-emerald-600 px-6 py-8 sm:px-10 sm:py-12 text-white">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-100 opacity-90">Farmer Profile</p>
                <h1 className="mt-4 text-3xl font-extrabold tracking-tight">Asiya</h1>
                <p className="mt-3 max-w-2xl text-sm text-emerald-100/90 sm:text-base">
                  Your farm dashboard for product performance and order activity.
                </p>
              </div>
              <div className="flex items-center gap-4 rounded-3xl bg-white/15 p-4 ring-1 ring-white/20 shadow-sm">
                <div className="h-20 w-20 rounded-full bg-emerald-100/20 flex items-center justify-center text-4xl">👩‍🌾</div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-emerald-100/90">Farm</p>
                  <p className="text-lg font-semibold">Green Harvest Farms</p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-8 sm:px-10 sm:py-10">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-emerald-100/80 bg-emerald-50 p-6 shadow-sm">
                <h2 className="text-sm font-semibold text-emerald-700 uppercase tracking-[0.2em]">Farm Details</h2>
                <div className="mt-6 space-y-4 text-slate-700">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Location</p>
                    <p className="mt-2 text-base font-semibold">Ogun State, Abeokuta</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Farm Type</p>
                    <p className="mt-2 text-base font-semibold">Mixed Crops & Livestock</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-emerald-100/80 bg-white p-6 shadow-sm">
                <h2 className="text-sm font-semibold text-emerald-700 uppercase tracking-[0.2em]">Farm Strength</h2>
                <p className="mt-6 text-slate-600">Your farm has been listed for 18 months with consistent order fulfilment and product quality ratings.</p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-emerald-100/80">
                <p className="text-sm font-semibold text-emerald-700 uppercase tracking-[0.2em]">Products Listed</p>
                <p className="mt-4 text-3xl font-bold text-slate-900">42</p>
              </div>
              <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-emerald-100/80">
                <p className="text-sm font-semibold text-emerald-700 uppercase tracking-[0.2em]">Total Sales</p>
                <p className="mt-4 text-3xl font-bold text-slate-900">₦1.2M</p>
              </div>
              <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-emerald-100/80">
                <p className="text-sm font-semibold text-emerald-700 uppercase tracking-[0.2em]">Active Orders</p>
                <p className="mt-4 text-3xl font-bold text-slate-900">8</p>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Link
                to="/product-management"
                className="inline-flex items-center justify-center rounded-3xl bg-emerald-600 px-6 py-4 text-center text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-700"
              >
                Add New Product
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-3xl border border-emerald-200 bg-white px-6 py-4 text-sm font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
