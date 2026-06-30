import { useNavigate } from "react-router-dom";
import FarmerBottomNav from "../components/FarmerBottomNav";

const listings = [
  {
    id: 1,
    name: "Premium Fresh Tomatoes",
    category: "Vegetables",
    stock: "24 crates",
    price: "₦18,000",
    status: "Live",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Harvested White Yam",
    category: "Tubers",
    stock: "40 bags",
    price: "₦22,500",
    status: "Pending",
    image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Brown Rice 50kg",
    category: "Grains",
    stock: "12 bags",
    price: "₦45,000",
    status: "Live",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80"
  }
];

export default function FarmerMarketplace() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-emerald-50 text-slate-900 pb-24">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Farmer Marketplace</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">Manage your listings</h1>
            <p className="mt-2 text-sm text-slate-600">Track, update, and promote your farm products from one place.</p>
          </div>
          <button
            type="button"
            onClick={() => navigate("/product-management")}
            className="inline-flex items-center justify-center rounded-3xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-700"
          >
            Add New Product
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {listings.map((listing) => (
            <div key={listing.id} className="overflow-hidden rounded-[24px] border border-emerald-100 bg-white shadow-sm">
              <img src={listing.image} alt={listing.name} className="h-40 w-full object-cover" />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                    {listing.category}
                  </span>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${listing.status === "Live" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                    {listing.status}
                  </span>
                </div>

                <h2 className="mt-4 text-lg font-semibold text-slate-900">{listing.name}</h2>
                <p className="mt-2 text-sm text-slate-600">Available stock: {listing.stock}</p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-xl font-bold text-emerald-700">{listing.price}</p>
                  <button type="button" className="rounded-2xl border border-emerald-200 px-3 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FarmerBottomNav />
    </div>
  );
}
