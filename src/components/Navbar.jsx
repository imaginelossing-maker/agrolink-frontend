import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 shadow-sm bg-surface-container-lowest transition-all duration-200 ease-in-out">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary font-headline-md" data-icon="agriculture">agriculture</span>
          <span className="text-title-lg font-headline-md text-primary tracking-tight">AgroLink Nigeria</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/marketplace" className="text-primary font-bold border-b-2 border-primary font-title-lg text-title-lg transition-all duration-200 ease-in-out">
            Market
          </Link>
          <Link to="/insights" className="text-on-surface-variant hover:text-primary-container font-title-lg text-title-lg transition-all duration-200 ease-in-out">
            Insights
          </Link>
          <Link to="/marketplace" className="text-on-surface-variant hover:text-primary-container font-title-lg text-title-lg transition-all duration-200 ease-in-out">
            Surplus
          </Link>
          <Link to="/login" className="text-on-surface-variant hover:text-primary-container font-title-lg text-title-lg transition-all duration-200 ease-in-out">
            Login
          </Link>
        </nav>
        <div className="hidden md:block">
          <Link to="/login" className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md text-label-md hover:shadow-lg transition-all active:scale-95">
            Get Started
          </Link>
        </div>
        <div className="md:hidden">
          <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center overflow-hidden">
            <img
              alt="Farmer Profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAJ4bTCq69eJtakrR-J4wYOJg2lFVbsd1Gw9dVSxSlVDThxBDdFfUT88putN0bVq7B10Rhd-FA8HwRl5PY5YgoQuw4Sd3yXVVYnZFekjCuuGm_QE61csRIZt7GH-i-F0Bd-2P9HlHp7xz78YZgpuRNmmQtQC8n9BfSedR5nTnIgyD6A7mfZHVGfSg25wC2S9Ap8Xiwlk209OINSoh97WbEt6ZBklpxaRYpBOaBgCyKFc0T2ne2hQP5JSSeVRi8DdxdeFhg4Piqcw"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
