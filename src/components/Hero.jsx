import { MessageCircle, Heart, Camera, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
      <div className="relative max-w-6xl mx-auto px-4 pt-16 pb-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              One campus app for matching, posting, and chatting
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              CampusConnect brings together swipes, a social feed, and real-time messages—purpose-built for students.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1 text-sm text-slate-700 shadow-sm"><MapPin size={16}/> Campus-first</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1 text-sm text-slate-700 shadow-sm"><Heart size={16}/> Smart matches</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1 text-sm text-slate-700 shadow-sm"><Camera size={16}/> Stories & posts</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1 text-sm text-slate-700 shadow-sm"><MessageCircle size={16}/> Real-time chats</span>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#features" className="px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-fuchsia-600 shadow hover:opacity-95">
                Explore Features
              </a>
              <a href="#contact" className="px-5 py-3 rounded-xl font-semibold text-slate-800 bg-white border border-slate-200 hover:bg-slate-50">
                Get Started
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <PhoneMock title="Swipe" accent="from-fuchsia-500 to-rose-500">
                  <div className="h-full w-full rounded-xl bg-gradient-to-br from-rose-100 to-fuchsia-100 grid place-items-center text-rose-600 font-semibold">Swipe</div>
                </PhoneMock>
                <PhoneMock title="Feed" accent="from-indigo-500 to-sky-500">
                  <div className="h-full w-full rounded-xl bg-gradient-to-br from-sky-100 to-indigo-100 grid place-items-center text-indigo-600 font-semibold">Feed</div>
                </PhoneMock>
                <PhoneMock title="Stories" accent="from-amber-500 to-pink-500">
                  <div className="h-full w-full rounded-xl bg-gradient-to-br from-amber-100 to-pink-100 grid place-items-center text-amber-600 font-semibold">Stories</div>
                </PhoneMock>
                <PhoneMock title="Chats" accent="from-emerald-500 to-teal-500">
                  <div className="h-full w-full rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 grid place-items-center text-emerald-600 font-semibold">Chats</div>
                </PhoneMock>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMock({ title, children, accent }) {
  return (
    <div className="flex flex-col">
      <div className={`text-xs font-medium text-slate-600 mb-2`}>{title}</div>
      <div className="relative aspect-[9/16] w-full rounded-[2rem] border border-slate-200 bg-white shadow-lg overflow-hidden">
        <div className={`absolute inset-0 h-20 bg-gradient-to-r ${accent} opacity-10`} />
        <div className="p-3 h-full">
          <div className="h-2 w-14 rounded-full bg-slate-200 mx-auto mb-2" />
          <div className="h-[calc(100%-0.75rem)] rounded-xl overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
