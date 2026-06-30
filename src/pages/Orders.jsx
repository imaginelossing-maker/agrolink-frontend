import { useNavigate } from "react-router-dom";

const orders = [
  { id: "AG-2101", product: "Organic Tomatoes", status: "Delivered", total: 2750 },
  { id: "AG-2102", product: "Fresh Ginger Root", status: "Preparing", total: 1850 },
  { id: "AG-2103", product: "Premium Maize", status: "On delivery", total: 950 }
];

export default function Orders() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-on-background">
      <div className="max-w-6xl mx-auto px-margin-mobile md:px-margin-desktop py-8">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 text-primary"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Back
        </button>

        <section className="rounded-[2rem] border border-outline-variant bg-surface-container-lowest p-8 shadow-sm shadow-surface-container-high transition">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Orders</p>
            <h1 className="text-4xl font-semibold text-on-background">Recent purchase activity</h1>
            <p className="max-w-2xl text-base leading-7 text-on-surface-variant">
              Monitor your orders and check delivery status for each purchase.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="rounded-3xl border border-outline-variant bg-surface p-6 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-on-surface-variant">Order {order.id}</p>
                  <p className="mt-2 text-lg font-semibold text-on-background">{order.product}</p>
                </div>
                <div className="mt-4 sm:mt-0 text-right">
                  <p className="text-sm text-on-surface-variant">Status</p>
                  <p className="mt-1 text-lg font-semibold text-on-background">{order.status}</p>
                  <p className="mt-1 text-sm text-on-surface">Total: ₦{order.total.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
