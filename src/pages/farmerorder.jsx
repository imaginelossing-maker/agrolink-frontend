import { useState } from "react";

export default function FarmerOrders() {
  const [tab, setTab] = useState("pending");

  const orders = [
    {
      id: 1,
      product: "Brown Rice (50kg)",
      buyer: "John Doe",
      quantity: 2,
      amount: 90000,
      status: "pending",
    },
    {
      id: 2,
      product: "Tomatoes (Crate)",
      buyer: "Mary Jane",
      quantity: 1,
      amount: 12500,
      status: "completed",
    },
  ];

  const filteredOrders = orders.filter((o) => o.status === tab);

  return (
    <div className="p-4 pb-24">
      <h1 className="text-xl font-bold mb-4">Farmer Orders</h1>

      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setTab("pending")}
          className={`px-4 py-2 rounded-full text-sm font-semibold ${
            tab === "pending" ? "bg-amber-500 text-white" : "bg-gray-100"
          }`}
        >
          Pending
        </button>

        <button
          onClick={() => setTab("completed")}
          className={`px-4 py-2 rounded-full text-sm font-semibold ${
            tab === "completed" ? "bg-green-600 text-white" : "bg-gray-100"
          }`}
        >
          Completed
        </button>
      </div>

      {/* Orders List */}
      <div className="space-y-3">
        {filteredOrders.length === 0 ? (
          <p className="text-gray-500">No orders here</p>
        ) : (
          filteredOrders.map((order) => (
            <div
              key={order.id}
              className="p-4 border rounded-xl bg-white shadow-sm"
            >
              <h2 className="font-semibold">{order.product}</h2>
              <p className="text-sm text-gray-500">
                Buyer: {order.buyer}
              </p>
              <p className="text-sm">Qty: {order.quantity}</p>
              <p className="font-bold text-emerald-700">
                ₦{order.amount.toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}