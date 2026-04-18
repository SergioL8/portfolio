import { projects } from "../data/content";
import ProjectDetail from "../components/ProjectDetail";

const project = projects.find((p) => p.slug === "korazon");

const BASE = import.meta.env.BASE_URL;

export default function KorazonPage() {
  return (
    <ProjectDetail project={project}>
      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          Korazon is a full-stack mobile application built from the ground up to
          bring safety and community to Greek Life at CU Boulder. The app
          creates a verified, closed-circle environment where only students with
          an <span className="text-white font-medium">@colorado.edu</span>{" "}
          login can access events, ensuring trusted community interactions.
        </p>
        <p className="text-slate-300 leading-relaxed">
          I designed and built the entire system: the mobile frontend in
          Flutter, the backend with Supabase (PostgreSQL), authentication flows,
          role-based access control, QR-based ticket validation, and integrated
          payment processing. I led the full product lifecycle from UI/UX design
          through App Store submission, iterating based on real user feedback in
          a fast-paced startup environment.
        </p>
      </section>

      {/* Link to Korazon website */}
      <section className="mb-12">
        <a
          href="https://jonakora.github.io/Korazon/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-slate-800 border border-slate-700 hover:border-sky-400/50 rounded-xl px-6 py-4 transition-colors"
        >
          <svg
            className="w-5 h-5 text-sky-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          <div>
            <p className="text-white font-medium">Visit Korazon Website</p>
            <p className="text-slate-400 text-sm">
              jonakora.github.io/Korazon
            </p>
          </div>
        </a>
      </section>

      {/* Mobile screenshot placeholder */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">App Design</h2>
        <div className="flex justify-center">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl w-64 h-[500px] flex items-center justify-center">
            <div className="text-center text-slate-500">
              <svg
                className="w-12 h-12 mx-auto mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <p className="text-sm">Mobile screenshot</p>
              <p className="text-xs">Coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              name: "Safety First",
              desc: "Advanced safety tools and real-time monitoring to keep the community secure and protected at every event.",
            },
            {
              name: "Verified Community",
              desc: "Seamlessly integrated with the university domain \u2014 only Buffs get in, ensuring a trusted and compliant community.",
            },
            {
              name: "Smooth Ticketing",
              desc: "No more guest-list chaos. One QR scan at the door and you're in \u2014 fast, simple, reliable.",
            },
            {
              name: "Real-Time Updates",
              desc: "Instant notifications for event changes, capacity updates, and announcements.",
            },
            {
              name: "Event Discovery",
              desc: "Find every Greek Life event happening on campus in one place. No more missed invites.",
            },
            {
              name: "Private by Design",
              desc: "Built with privacy at its core \u2014 no selling, no sharing, no surprises.",
            },
          ].map((f) => (
            <div
              key={f.name}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-5"
            >
              <h3 className="text-white font-semibold mb-2">{f.name}</h3>
              <p className="text-slate-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">System Architecture</h2>
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 md:p-10 overflow-x-auto">
          <div className="min-w-[500px]">
            {/* Top: Flutter App */}
            <div className="flex justify-center mb-8">
              <div className="bg-sky-400/10 border-2 border-sky-400 rounded-xl px-8 py-4 text-center">
                <p className="text-sky-400 font-bold text-lg">Flutter App</p>
                <p className="text-slate-400 text-xs">Dart / iOS & Android</p>
              </div>
            </div>

            {/* Arrows down */}
            <div className="flex justify-center mb-8">
              <div className="grid grid-cols-3 gap-16 md:gap-24">
                {["Auth Flow", "Data Layer", "Payments"].map((label) => (
                  <div key={label} className="flex flex-col items-center">
                    <div className="w-px h-8 bg-slate-600" />
                    <svg
                      className="w-3 h-3 text-slate-600"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path d="M6 9L1 4h10z" />
                    </svg>
                    <span className="text-slate-500 text-xs mt-1">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Middle row: 3 services */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-emerald-400/10 border border-emerald-400/30 rounded-lg p-4 text-center">
                <p className="text-emerald-400 font-semibold text-sm">
                  Supabase Auth
                </p>
                <p className="text-slate-500 text-xs mt-1">
                  .edu verification
                </p>
                <p className="text-slate-500 text-xs">Role-based access</p>
              </div>
              <div className="bg-purple-400/10 border border-purple-400/30 rounded-lg p-4 text-center">
                <p className="text-purple-400 font-semibold text-sm">
                  PostgreSQL
                </p>
                <p className="text-slate-500 text-xs mt-1">
                  Relational schema
                </p>
                <p className="text-slate-500 text-xs">Realtime subscriptions</p>
              </div>
              <div className="bg-amber-400/10 border border-amber-400/30 rounded-lg p-4 text-center">
                <p className="text-amber-400 font-semibold text-sm">
                  Payment Gateway
                </p>
                <p className="text-slate-500 text-xs mt-1">
                  Ticket purchases
                </p>
                <p className="text-slate-500 text-xs">Secure processing</p>
              </div>
            </div>

            {/* Bottom arrow */}
            <div className="flex justify-center mb-8">
              <div className="flex flex-col items-center">
                <div className="w-px h-8 bg-slate-600" />
                <svg
                  className="w-3 h-3 text-slate-600"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M6 9L1 4h10z" />
                </svg>
              </div>
            </div>

            {/* Bottom: QR Output */}
            <div className="flex justify-center">
              <div className="bg-pink-400/10 border border-pink-400/30 rounded-xl px-8 py-4 text-center">
                <p className="text-pink-400 font-bold">QR Ticket Validation</p>
                <p className="text-slate-400 text-xs">
                  One scan at the door &mdash; identity + ticket confirmed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section>
        <h2 className="text-2xl font-bold mb-6">How It Works</h2>
        <div className="space-y-6">
          {[
            {
              step: "01",
              title: "Sign in with your .edu",
              desc: "Use your @colorado.edu account to verify you're a Buff. No extra signups, no waiting \u2014 instant access to the community.",
            },
            {
              step: "02",
              title: "Browse & grab tickets",
              desc: "Explore events from every house on campus. Grab your ticket in seconds \u2014 it's tied to your verified identity.",
            },
            {
              step: "03",
              title: "One scan, you're in",
              desc: "Show your Korazon QR at the door. One scan confirms your identity and ticket. No lists, no drama, no waiting.",
            },
          ].map((s) => (
            <div
              key={s.step}
              className="flex gap-4 items-start bg-slate-800/50 border border-slate-700 rounded-xl p-5"
            >
              <span className="text-sky-400 font-bold text-lg shrink-0">
                {s.step}
              </span>
              <div>
                <h3 className="text-white font-semibold mb-1">{s.title}</h3>
                <p className="text-slate-400 text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </ProjectDetail>
  );
}
