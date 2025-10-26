import { Users, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2" aria-label="CampusConnect home">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 grid place-items-center text-white">
            <Users size={20} />
          </div>
          <span className="font-semibold text-slate-800 text-lg">CampusConnect</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600" aria-label="Primary">
          <a className="hover:text-slate-900" href="#features">Features</a>
          <a className="hover:text-slate-900" href="#wireframes">Wireframes</a>
          <a className="hover:text-slate-900" href="#contact">Contact</a>
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <button className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900" aria-label="Log in">Log in</button>
          <a href="#contact" className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-fuchsia-600 shadow">
            Get Started
          </a>
        </div>
        <button className="md:hidden p-2 rounded-lg border border-slate-200" aria-label="Open menu" onClick={() => setOpen(!open)}>
          <Menu size={18} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 text-sm text-slate-700">
            <a className="py-2" href="#features" onClick={() => setOpen(false)}>Features</a>
            <a className="py-2" href="#wireframes" onClick={() => setOpen(false)}>Wireframes</a>
            <a className="py-2" href="#contact" onClick={() => setOpen(false)}>Contact</a>
            <a className="mt-2 px-4 py-2 rounded-lg text-center font-semibold text-white bg-gradient-to-r from-indigo-600 to-fuchsia-600" href="#contact" onClick={() => setOpen(false)}>
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
