export default function ProductCard({ product, onAddToCart }) {
  return (
    <article className="flex flex-col gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
      <img
        className="h-56 w-full rounded-[1.5rem] object-cover"
        src={product.image}
        alt={product.name}
      />
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">{product.name}</h3>
            <p className="text-sm text-slate-500">{product.category}</p>
          </div>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
            ₦{product.price}
          </span>
        </div>
        <p className="text-sm leading-6 text-slate-600">{product.description}</p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => onAddToCart(product)}
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Add to Cart
          </button>
          <a
            href={`https://wa.me/${product.phone}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Contact Farmer
          </a>
        </div>
      </div>
    </article>
  );
}
