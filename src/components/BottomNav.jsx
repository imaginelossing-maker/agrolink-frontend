import { Link, useLocation } from "react-router-dom";

export default function BottomNav() {
  const location = useLocation();
  const dashboardLink = location.pathname.startsWith("/seller-dashboard") ? "/seller-dashboard" : "/buyer-dashboard";
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-2">
        <Link
          to={dashboardLink}
          className="flex-1 rounded-3xl bg-slate-100 px-3 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
        >
          Dashboard
        </Link>
        <Link
          to="/marketplace"
          className="flex-1 rounded-3xl bg-slate-100 px-3 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
        >
          Marketplace
        </Link>
        <Link
          to="/orders"
          className="flex-1 rounded-3xl bg-slate-100 px-3 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
        >
          Orders
        </Link>
        <Link
          to="/cart"
          className="flex-1 rounded-3xl bg-slate-100 px-3 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
        >
          Cart
        </Link>
        <Link
          to="/profile"
          className="flex-1 rounded-3xl bg-slate-100 px-3 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
        >
          Profile
        </Link>
      </div>
    </nav>
  );
}
