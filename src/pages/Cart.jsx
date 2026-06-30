import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cart.reduce((sum, item) => sum + Number(item.price || 0), 0);

  return (
    <div className="bg-green-50 min-h-screen">
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-green-700">shopping_cart</span>
          <h1 className="text-xl font-bold text-green-700">My Cart</h1>
        </div>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Back
        </button>
      </header>

      <div className="max-w-5xl mx-auto p-6">
        {cart.length === 0 ? (
          <div className="bg-white p-10 rounded-xl text-center shadow">
            <h2 className="text-xl font-bold mb-2">Cart is empty</h2>
            <p className="text-gray-500">Add products from the marketplace</p>
          </div>
        ) : (
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow p-4 mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-24 h-24 rounded-lg object-cover" />
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-green-700">₦{item.price.toLocaleString()}</p>
                    <p className="text-gray-500">Quantity: {item.quantity || 1}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="bg-white rounded-xl p-6 shadow">
              <div className="flex justify-between mb-4">
                <h2 className="font-bold text-lg">Total:</h2>
                <h2 className="font-bold text-green-700 text-xl">₦{total.toLocaleString()}</h2>
              </div>
              <button className="w-full bg-green-700 text-white py-3 rounded-lg">Proceed To Checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
