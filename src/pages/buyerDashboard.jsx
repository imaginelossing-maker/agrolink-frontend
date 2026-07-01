import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";

const farmers = [
  "Musa Ali",
  "Amina Yusuf",
  "Ibrahim Bello",
  "Chinedu Okafor",
  "Grace Eze",
  "Samuel Ade",
  "Fatima Hassan",
  "David James",
  "Mary Johnson",
  "Yakubu Musa",
  "Ahmed Sule",
  "Ngozi Obi",
  "Joseph Daniel",
  "Sarah Peter",
  "Abdul Kareem",
  "Blessing Umeh",
  "Emeka Nwosu",
  "Ruth Emmanuel",
  "John Mark",
  "Esther Musa",
];

const produceList = [
  {
    name: "Tomatoes",
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800",
  },
  {
    name: "Rice",
    category: "Grains",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800",
  },
  {
    name: "Yam",
    category: "Tubers",
    image:
      "https://images.unsplash.com/photo-1603048719539-9ecb4aeef0d5?w=800",
  },
  {
    name: "Maize",
    category: "Grains",
    image:
      "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=800",
  },
  {
    name: "Beans",
    category: "Grains",
    image:
      "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=800",
  },
  {
    name: "Pepper",
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1583663848850-46af132dc08e?w=800",
  },
  {
    name: "Cabbage",
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1615485925873-5b8dcbbead3d?w=800",
  },
  {
    name: "Onions",
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800",
  },
  {
    name: "Cassava",
    category: "Tubers",
    image:
      "https://images.unsplash.com/photo-1596097635121-14b38c5d1f7f?w=800",
  },
  {
    name: "Bananas",
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800",
  },
  {
    name: "Orange",
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1547514701-42782101795e?w=800",
  },
  {
    name: "Watermelon",
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=800",
  },
  {
    name: "Groundnut",
    category: "Grains",
    image:
      "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800",
  },
  {
    name: "Cucumber",
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=800",
  },
  {
    name: "Potatoes",
    category: "Tubers",
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800",
  },
  {
    name: "Mango",
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1553279768-865429fa0078?w=800",
  },
  {
    name: "Okra",
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?w=800",
  },
  {
    name: "Millet",
    category: "Grains",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",
  },
  {
    name: "Plantain",
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=800",
  },
  {
    name: "Spinach",
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=800",
  },
];

const states = [
  "Kano",
  "Kaduna",
  "Benue",
  "Lagos",
  "Jos",
  "Ogun",
  "Enugu",
  "Abuja",
];

const products = Array.from({ length: 200 }, (_, index) => {
  const produce = produceList[index % produceList.length];
  const farmer = farmers[Math.floor(index / 10) % farmers.length];

  return {
    id: index + 1,
    name: `${produce.name} (${Math.floor(Math.random() * 50 + 5)}kg)`,
    price: Math.floor(Math.random() * 50000 + 5000),
    farmer,
    state: states[Math.floor(Math.random() * states.length)],
    category: produce.category,
    image: produce.image,
  };
});
export default function BuyerDashboard() {
  const [cartCount, setCartCount] = useState(0);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

useEffect(() => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  setCartCount(cart.length);

  // get saved user data
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    setUserName(user.fullname);
  }
}, []);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ ...product, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartCount(cart.length);
  };

  return (
    <div className="min-h-screen bg-background text-on-background pb-24">
      <header className="w-full sticky top-0 z-50 shadow-sm bg-surface-container-lowest dark:bg-surface-dim">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-[32px]">agriculture</span>
            <h1 className="text-title-lg font-headline-md text-primary tracking-tight">AgroLink Nigeria</h1>
          </div>

          <div className="flex items-center gap-4 relative">
            <button
              type="button"
              onClick={() => navigate("/cart")}
              className="p-2 rounded-full hover:bg-surface-container transition-colors inline-block"
            >
              <span className="material-symbols-outlined text-on-surface-variant">shopping_cart</span>
            </button>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </div>

          <div className="w-10 h-10 rounded-full overflow-hidden bg-primary-container flex items-center justify-center text-on-primary-container font-bold border-2 border-outline-variant">
            AO
          </div>
        </div>
      </header>

      <main className="flex-grow pb-24">
        <section className="px-margin-mobile md:px-margin-desktop pt-8 pb-4 max-w-container-max mx-auto">
          <div className="mb-6">
       <h2 className="font-headline-md-mobile md:font-headline-md text-headline-md-mobile md:text-headline-md text-on-surface">
  welcome, {userName || "User"}
</h2>
          </div>
          <div className="relative group max-w-2xl">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-outline">search</span>
            </div>
            <input
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-outline-variant bg-surface hover:bg-surface-container focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none font-body-md shadow-sm"
              placeholder="Search for grains, vegetables, or sellers..."
              type="text"
            />
            <button className="absolute right-3 inset-y-3 px-4 bg-primary text-on-primary rounded-lg font-label-md transition-all active:scale-95">
              Search
            </button>
          </div>
        </section>

        <section className="px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto overflow-hidden">
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
            <button className="px-6 py-2.5 rounded-full bg-primary-container text-on-primary-container font-label-md whitespace-nowrap shadow-sm">All Products</button>
            <button className="px-6 py-2.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-md whitespace-nowrap hover:bg-primary-fixed-dim transition-colors">Grains</button>
            <button className="px-6 py-2.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-md whitespace-nowrap hover:bg-primary-fixed-dim transition-colors">Vegetables</button>
            <button className="px-6 py-2.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-md whitespace-nowrap hover:bg-primary-fixed-dim transition-colors">Tubers</button>
            <button className="px-6 py-2.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-md whitespace-nowrap hover:bg-primary-fixed-dim transition-colors">Livestock</button>
            <button className="px-6 py-2.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-md whitespace-nowrap hover:bg-primary-fixed-dim transition-colors">Fruits</button>
            <button className="px-6 py-2.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-md whitespace-nowrap hover:bg-primary-fixed-dim transition-colors">Spices</button>
          </div>
        </section>

        <section className="px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h3 className="font-title-lg text-title-lg text-on-surface">Available Now</h3>
              <div className="h-1 w-12 bg-primary mt-1 rounded-full" />
            </div>
            <button
              type="button"
              onClick={() => navigate("/marketplace")}
              className="text-primary font-label-md flex items-center gap-1 hover:underline"
            >
              View All
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-gutter-mobile md:gap-gutter-desktop">
            {products.map((product) => (
              <div key={product.id} className="product-card flex flex-col bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(46,125,50,0.06)] border border-outline-variant/10 overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img alt={product.name} className="w-full h-full object-cover" src={product.image} />
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-full text-primary shadow-sm">
                    <span className="material-symbols-outlined text-xl">favorite</span>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <span className="text-[10px] font-label-sm uppercase tracking-wider text-secondary mb-1">{product.category}</span>
                  <h4 className="font-label-md text-on-surface line-clamp-1 mb-1">{product.name}</h4>
                  <div className="flex items-center gap-1 text-on-surface-variant mb-3">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span className="text-[12px]">{product.state}</span>
                  </div>
                  <div className="mt-auto">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-title-lg text-primary">₦{product.price.toLocaleString()}</span>
                      <span className="text-[11px] font-label-sm text-outline">By {product.farmer}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => addToCart(product)}
                      className="w-full py-2 bg-primary text-white rounded-lg"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <BottomNav />
    </div>
  );
}
