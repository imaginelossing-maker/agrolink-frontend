import { useNavigate } from "react-router-dom";
import FarmerBottomNav from "../components/FarmerBottomNav";

const stats = [
  { title: "Sales This Week", value: "₦320,000", trend: "+12%" },
  { title: "Orders Received", value: "27", trend: "+4" },
  { title: "Active Listings", value: "12", trend: "Stable" },
  { title: "Fulfillment Rate", value: "96%", trend: "+3%" }
];

const activity = [
  { label: "Tomatoes sold out", time: "2 hours ago" },
  { label: "New order from Lagos", time: "4 hours ago" },
  { label: "Inventory updated", time: "Yesterday" }
];

export default function FarmerInsights() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-emerald-50 text-slate-900 pb-24">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Farmer Insights</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">Performance overview</h1>
            <p className="mt-2 text-sm text-slate-600">Monitor your sales, orders, and activity in one view.</p>
          </div>
          <button
            type="button"
            onClick={() => navigate("/seller-dashboard")}
            className="inline-flex items-center justify-center rounded-3xl border border-emerald-200 bg-white px-5 py-3 text-sm font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50"
          >
            Back to Dashboard
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="grid gap-4 md:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.title} className="rounded-[24px] border border-emerald-100 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-600">{stat.title}</p>
                <p className="mt-4 text-3xl font-bold text-slate-900">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold text-emerald-700">{stat.trend}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[24px] border border-emerald-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Recent activity</h2>
            <div className="mt-6 space-y-4">
              {activity.map((item) => (
                <div key={item.label} className="flex items-start gap-3 rounded-2xl bg-emerald-50 p-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-600" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                    <p className="text-sm text-slate-600">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FarmerBottomNav />
    </div>
  );
}
