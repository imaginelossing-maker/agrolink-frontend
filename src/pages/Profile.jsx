import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fff8f6] min-h-screen">
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center gap-4 mb-8">
          <button
            type="button"
            onClick={() => navigate("/buyer-dashboard")}
            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-3xl font-bold text-green-700">My Profile</h1>
        </div>

        <div className="bg-white rounded-2xl shadow p-8">
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b2933?auto=format&fit=crop&w=800&q=80"
                alt="Amina Okafor"
              />
            </div>
            <h2 className="text-2xl font-bold mt-4">Amina Okafor</h2>
            <p className="text-gray-500">Buyer • Lagos, Nigeria</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-green-50 p-5 rounded-xl">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-700">mail</span>
                <h3 className="font-bold">Email</h3>
              </div>
              <p className="mt-2 text-gray-600">amina@gmail.com</p>
            </div>
            <div className="bg-green-50 p-5 rounded-xl">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-700">call</span>
                <h3 className="font-bold">Phone</h3>
              </div>
              <p className="mt-2 text-gray-600">+234 8012345678</p>
            </div>
            <div className="bg-green-50 p-5 rounded-xl">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-700">shopping_bag</span>
                <h3 className="font-bold">Orders</h3>
              </div>
              <p className="mt-2 text-gray-600">14 Orders</p>
            </div>
            <div className="bg-green-50 p-5 rounded-xl">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-700">favorite</span>
                <h3 className="font-bold">Wishlist</h3>
              </div>
              <p className="mt-2 text-gray-600">8 Saved Products</p>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <button className="bg-green-700 text-white px-6 py-3 rounded-lg">Edit Profile</button>
            <button className="border border-red-500 text-red-500 px-6 py-3 rounded-lg">Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
