import { Link } from "react-router-dom";

export default function FarmerBottomNav() {
  const links = [
  { to: "/seller-dashboard", label: "Dashboard" },
  { to: "/farmer-marketplace", label: "Marketplace" },
  { to: "/farmer-insights", label: "Insights" },
  { to: "/farmer-profile", label: "Profile" }, // FIXED
];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-emerald-200 bg-white/95 px-3 py-3 shadow-[0_-10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-2">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="flex-1 rounded-3xl bg-emerald-50 px-2 py-3 text-center text-xs font-semibold text-emerald-800 transition hover:bg-emerald-100 sm:px-3 sm:text-sm"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
