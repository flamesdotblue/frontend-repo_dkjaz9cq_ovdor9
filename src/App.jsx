import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Wireframes from './components/Wireframes';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50/40 to-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Wireframes />
      </main>
      <footer className="border-t border-slate-200 py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-semibold text-slate-800">CampusConnect</div>
            <p className="mt-2 text-slate-600">A polished landing experience for matching, posting, stories, and messaging built for university life.</p>
          </div>
          <div>
            <div className="font-semibold text-slate-800">Product</div>
            <ul className="mt-2 space-y-2 text-slate-600">
              <li><a href="#features" className="hover:text-slate-900">Features</a></li>
              <li><a href="#wireframes" className="hover:text-slate-900">Wireframes</a></li>
              <li><a href="#contact" className="hover:text-slate-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-800">Legal</div>
            <ul className="mt-2 space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Privacy</a></li>
              <li><a href="#" className="hover:text-slate-900">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-8 text-center text-slate-500">
          © {new Date().getFullYear()} CampusConnect. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
