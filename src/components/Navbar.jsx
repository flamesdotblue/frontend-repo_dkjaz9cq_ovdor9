import { Users } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 grid place-items-center text-white">
            <Users size={20} />
          </div>
          <span className="font-semibold text-slate-800 text-lg">CampusConnect</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a className="hover:text-slate-900" href="#features">Features</a>
          <a className="hover:text-slate-900" href="#wireframes">Wireframes</a>
          <a className="hover:text-slate-900" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900">Log in</button>
          <button className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-fuchsia-600 shadow">
            Get the MVP
          </button>
        </div>
      </div>
    </header>
  );
}
