export default function Wireframes() {
  return (
    <section id="wireframes" className="relative">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Key screens</h2>
        <p className="mt-2 text-slate-600">Login, profile, swipe, feed, chat, and stories—mapped for a clean v1 rollout.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <WireframeCard title="Login">
            <div className="space-y-3">
              <div className="h-6 bg-slate-200 rounded w-24" />
              <div className="h-10 bg-slate-200 rounded" />
              <div className="h-10 bg-slate-200 rounded" />
              <div className="h-10 bg-slate-300 rounded w-28 ml-auto" />
            </div>
          </WireframeCard>

          <WireframeCard title="Profile">
            <div className="space-y-3">
              <div className="h-28 bg-slate-200 rounded" />
              <div className="h-4 bg-slate-200 rounded w-2/3" />
              <div className="h-4 bg-slate-200 rounded w-1/2" />
              <div className="grid grid-cols-3 gap-2">
                <div className="h-7 bg-slate-200 rounded" />
                <div className="h-7 bg-slate-200 rounded" />
                <div className="h-7 bg-slate-200 rounded" />
              </div>
            </div>
          </WireframeCard>

          <WireframeCard title="Swipe">
            <div className="space-y-3">
              <div className="h-40 bg-slate-200 rounded" />
              <div className="h-4 bg-slate-200 rounded w-1/2" />
              <div className="flex items-center justify-between pt-2">
                <div className="h-10 w-10 rounded-full bg-slate-200" />
                <div className="h-12 w-12 rounded-full bg-slate-300" />
                <div className="h-10 w-10 rounded-full bg-slate-200" />
              </div>
            </div>
          </WireframeCard>

          <WireframeCard title="Feed">
            <div className="space-y-3">
              <div className="h-24 bg-slate-200 rounded" />
              <div className="h-4 bg-slate-200 rounded w-1/2" />
              <div className="h-28 bg-slate-200 rounded" />
              <div className="h-4 bg-slate-200 rounded w-1/3" />
            </div>
          </WireframeCard>

          <WireframeCard title="Chat">
            <div className="space-y-3">
              <div className="h-4 w-24 bg-slate-200 rounded" />
              <div className="flex gap-2">
                <div className="flex-1" />
                <div className="h-8 w-2/3 bg-slate-200 rounded-l-xl rounded-br-xl" />
              </div>
              <div className="flex gap-2">
                <div className="h-8 w-2/3 bg-slate-200 rounded-r-xl rounded-bl-xl" />
                <div className="flex-1" />
              </div>
              <div className="h-10 bg-slate-200 rounded" />
            </div>
          </WireframeCard>

          <WireframeCard title="Stories">
            <div className="space-y-3">
              <div className="flex gap-2">
                <div className="h-14 w-14 rounded-full bg-slate-200" />
                <div className="h-14 w-14 rounded-full bg-slate-200" />
                <div className="h-14 w-14 rounded-full bg-slate-200" />
              </div>
              <div className="h-32 bg-slate-200 rounded" />
            </div>
          </WireframeCard>
        </div>

        <div id="contact" className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-center">
          <p className="text-slate-700">Want this launched with backend, auth, and real-time chat? I can wire the API and deployment next.</p>
          <a href="#" className="mt-4 inline-block px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-fuchsia-600 shadow hover:opacity-95">
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}

function WireframeCard({ title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-sm font-semibold text-slate-800 mb-3">{title}</div>
      <div className="aspect-[9/16] rounded-xl border border-dashed border-slate-300 p-4 bg-slate-50">
        {children}
      </div>
    </div>
  );
}
