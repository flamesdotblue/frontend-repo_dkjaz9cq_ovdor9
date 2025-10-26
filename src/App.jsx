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
      <footer className="border-t border-slate-200 py-10">
        <div className="max-w-6xl mx-auto px-4 text-center text-slate-600">
          <p>CampusConnect MVP — built for university communities</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
