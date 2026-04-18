import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/project/${project.slug}`}
      className="bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col h-full hover:border-sky-400/50 transition-colors cursor-pointer group"
    >
      {/* Category tag */}
      <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-3">
        {project.category}
      </span>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-sky-400 transition-colors">
        {project.title}
      </h3>
      {project.subtitle && (
        <p className="text-sm text-slate-400 mb-3">{project.subtitle}</p>
      )}

      {/* Description */}
      <p className="text-slate-300 text-sm mb-4">{project.description}</p>

      {/* Bullets */}
      <ul className="text-slate-400 text-sm space-y-2 mb-6 flex-1">
        {project.bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-sky-400 mt-1 shrink-0">&#8250;</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 text-xs rounded-md bg-slate-900 text-emerald-400 border border-emerald-400/20"
          >
            {t}
          </span>
        ))}
      </div>

      {/* View more hint */}
      <div className="mt-4 flex items-center gap-1 text-sky-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
        View project details
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>
  );
}
