import { Link } from "react-router-dom";

export default function ProjectDetail({ project, children }) {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      {/* Header */}
      <div className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center gap-4">
          <Link
            to="/#projects"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Link>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
              {project.category}
            </span>
            <h1 className="text-2xl md:text-3xl font-bold">{project.title}</h1>
            {project.subtitle && (
              <p className="text-slate-400 text-sm">{project.subtitle}</p>
            )}
          </div>
        </div>
      </div>

      {/* Tech tags */}
      <div className="max-w-5xl mx-auto px-6 pt-6">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-sm rounded-full bg-slate-800 text-emerald-400 border border-emerald-400/20"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Page content */}
      <div className="max-w-5xl mx-auto px-6 py-10">{children}</div>

      {/* Footer back link */}
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to all projects
        </Link>
      </div>
    </div>
  );
}
