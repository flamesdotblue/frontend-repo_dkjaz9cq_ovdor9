import { Heart, MessageCircle, Camera, Bell, Lock, Sliders, Users, Clock } from 'lucide-react';

const features = [
  {
    title: 'Matching',
    icon: Heart,
    desc: 'Swipe through students on your campus. Mutual likes become matches for friendships or dates.',
    pill: 'Campus-only',
  },
  {
    title: 'Messaging',
    icon: MessageCircle,
    desc: 'One-on-one and group chats with text, images, and voice notes using real-time updates.',
    pill: 'Socket.io powered',
  },
  {
    title: 'Posting Feed',
    icon: Camera,
    desc: 'Share photos, videos, and text posts. Likes, comments, and campus-focused sharing.',
    pill: 'Events & study groups',
  },
  {
    title: 'Stories',
    icon: Clock,
    desc: '24-hour ephemeral stories visible to matches or your whole campus.',
    pill: 'Ephemeral',
  },
  {
    title: 'Notifications',
    icon: Bell,
    desc: 'Stay on top of matches, messages, likes, and comments with push alerts.',
    pill: 'Push-ready',
  },
  {
    title: 'Privacy & Safety',
    icon: Lock,
    desc: 'Block and report users. Restrict access by campus via geofencing or verification.',
    pill: 'Student-first',
  },
  {
    title: 'Filters',
    icon: Sliders,
    desc: 'Find people by interests, year, and major. Tailor your match queue to what matters.',
    pill: 'Smart filters',
  },
  {
    title: 'Profiles',
    icon: Users,
    desc: 'University email verification with profile fields for name, age, major, interests, and photo.',
    pill: 'Verified .edu',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Everything students need to connect on campus</h2>
        <p className="mt-2 text-slate-600">Focused MVP scope: one campus, core flows, and functional UI over polish.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white grid place-items-center">
                  <f.icon size={20} />
                </div>
                <div className="text-xs px-2 py-1 rounded-full border border-slate-200 text-slate-600 bg-white">
                  {f.pill}
                </div>
              </div>
              <h3 className="mt-4 font-semibold text-lg text-slate-900">{f.title}</h3>
              <p className="mt-1 text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
