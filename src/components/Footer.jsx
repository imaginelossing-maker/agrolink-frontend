export default function Footer() {
  return (
    <footer className="w-full py-8 px-margin-desktop bg-surface-container-highest mt-auto border-t border-outline-variant/10">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-label-sm text-label-sm text-on-surface-variant">
          © 2026 AgroLink Nigeria. Digital Harvest for Sustainable Growth.
        </p>
        <div className="flex gap-6">
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">
            Farmer Terms
          </a>
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">
            Marketplace Rules
          </a>
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
