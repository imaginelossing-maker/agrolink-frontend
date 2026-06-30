import { useState } from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Premium Brown Rice (50kg)",
    price: 45000,
    farmer: "Musa Ali",
    state: "Jos, Plateau",
    category: "Grains",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Fresh Tomatoes (Crate)",
    price: 12500,
    farmer: "Aminu Farm",
    state: "Zaria, Kaduna",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Large White Yam",
    price: 22000,
    farmer: "Ortom Roots",
    state: "Benue",
    category: "Tubers",
    image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Yellow Maize",
    price: 38000,
    farmer: "Sani Grains",
    state: "Kano",
    category: "Grains",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80"
  }
];

export default function FarmerMarketplace() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ ...product, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    setMessage(`${product.name} added to cart.`);
    window.setTimeout(() => setMessage(""), 2500);
  };

  return (
    <div className="min-h-screen bg-background text-on-background pb-24 sm:pb-0">
      <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8">
        <div className="flex items-center gap-4 mb-8">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow hover:bg-gray-100"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div>
            <h1 className="text-3xl font-bold text-primary">All Available Products</h1>
            <p className="text-on-surface-variant">Browse all farm produce</p>
          </div>
        </div>

        {message && (
          <div className="bg-surface-container-lowest p-4 rounded-3xl text-sm text-primary mb-6 shadow-sm">
            {message}
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col bg-white rounded-xl shadow overflow-hidden">
              <div className="aspect-[4/3]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <span className="text-xs text-primary">{product.category}</span>
                <h4 className="font-semibold mt-2">{product.name}</h4>
                <div className="flex items-center text-on-surface-variant text-sm mt-2">
                  <span className="material-symbols-outlined text-sm mr-1">location_on</span>
                  {product.state}
                </div>
                <div className="flex justify-between mt-4">
                  <span className="font-bold text-primary">₦{product.price.toLocaleString()}</span>
                  <span className="text-xs text-on-surface-variant">By {product.farmer}</span>
                </div>
                <button
                  type="button"
                  onClick={() => addToCart(product)}
                  className="w-full mt-4 py-2 rounded-lg bg-primary text-on-primary"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
