import { useNavigate } from "react-router-dom";

export default function ProductManagement() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col font-body-md text-body-md bg-[#fff8f6]">
      <header className="w-full sticky top-0 z-50 shadow-sm bg-surface-container-lowest flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => navigate("/seller-dashboard")}
            className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="font-title-lg text-title-lg text-primary tracking-tight">Add New Product</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
            <span className="material-symbols-outlined">account_circle</span>
          </div>
        </div>
      </header>

      <main className="flex-grow w-full max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop py-8">
        <div className="form-card rounded-xl p-6 md:p-8">
          <div className="mb-8">
            <h2 className="font-headline-md-mobile md:font-headline-md text-headline-md-mobile md:text-headline-md text-on-surface">Product Details</h2>
            <p className="text-on-surface-variant mt-1">Fill in the information below to list your harvest on AgroLink Nigeria.</p>
          </div>
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="font-label-md text-label-md text-on-surface-variant">Product Image</label>
              <div className="upload-area rounded-xl p-10 flex flex-col items-center justify-center cursor-pointer">
                <div className="w-12 h-12 bg-primary-container/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined" style={{ fontSize: "32px" }}>add_a_photo</span>
                </div>
                <p className="font-title-lg text-title-lg text-on-surface text-center">Click or Drag to Upload</p>
                <p className="font-label-sm text-label-sm text-outline mt-1">PNG, JPG or WEBP (Max. 5MB)</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="product_name">Product Name</label>
                <input className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface-container-lowest focus:ring-0" id="product_name" placeholder="e.g. Premium White Yam" type="text" />
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="category">Category</label>
                <select className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface-container-lowest focus:ring-0" id="category">
                  <option value="">Select Category</option>
                  <option value="tubers">Tubers &amp; Roots</option>
                  <option value="grains">Grains &amp; Cereals</option>
                  <option value="vegetables">Vegetables</option>
                  <option value="fruits">Fruits</option>
                  <option value="livestock">Livestock</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="quantity">Quantity Available</label>
                <div className="flex">
                  <input className="flex-grow px-4 py-3 rounded-l-lg border border-outline-variant bg-surface-container-lowest focus:ring-0" id="quantity" placeholder="0.00" type="number" />
                  <select className="px-4 py-3 rounded-r-lg border-y border-r border-outline-variant bg-surface-container border-l-0 focus:ring-0">
                    <option value="kg">KG</option>
                    <option value="ton">Ton</option>
                    <option value="crate">Crate</option>
                    <option value="bag">Bag</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="price">Price per Unit (₦)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">₦</span>
                  <input className="w-full pl-10 pr-4 py-3 rounded-lg border border-outline-variant bg-surface-container-lowest focus:ring-0" id="price" placeholder="0,000.00" type="number" />
                </div>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="location">Pickup Location</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">location_on</span>
                  <input className="w-full pl-12 pr-4 py-3 rounded-lg border border-outline-variant bg-surface-container-lowest focus:ring-0" id="location" placeholder="e.g. Kaduna Central Market, Kaduna" type="text" />
                </div>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="description">Description</label>
                <textarea className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface-container-lowest focus:ring-0 resize-none" id="description" placeholder="Describe your product quality, harvest date, and any other relevant details..." rows="4"></textarea>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 pt-4">
              <button className="flex-grow bg-primary text-on-primary font-label-md text-label-md py-4 rounded-full hover:shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2" type="submit">
                <span className="material-symbols-outlined">save</span>
                Save Product
              </button>
              <button
                type="button"
                onClick={() => navigate("/seller-dashboard")}
                className="flex-grow md:flex-grow-0 md:w-48 bg-transparent text-primary border border-primary font-label-md text-label-md py-4 rounded-full hover:bg-primary-fixed-dim/10 active:scale-95 transition-all"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30">
            <span className="material-symbols-outlined text-primary mb-2">verified</span>
            <h4 className="font-label-md text-label-md text-on-surface mb-1">Quality Standards</h4>
            <p className="font-label-sm text-label-sm text-on-surface-variant">Verified listings get 3x more visibility from institutional buyers.</p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30">
            <span className="material-symbols-outlined text-primary mb-2">payments</span>
            <h4 className="font-label-md text-label-md text-on-surface mb-1">Secure Escrow</h4>
            <p className="font-label-sm text-label-sm text-on-surface-variant">All payments are held securely until buyer confirms receipt.</p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30">
            <span className="material-symbols-outlined text-primary mb-2">local_shipping</span>
            <h4 className="font-label-md text-label-md text-on-surface mb-1">Logistics Support</h4>
            <p className="font-label-sm text-label-sm text-on-surface-variant">Need help with transport? Select 'Logistics Aid' in settings.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
