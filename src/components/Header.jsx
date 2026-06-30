export default function Header({ title, subtitle }) {
  return (
    <header className="space-y-4 pb-6">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">AgroLink</p>
      <div className="space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          {title}
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-700">{subtitle}</p>
      </div>
    </header>
  );
}
