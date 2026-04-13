import { education, skills } from "../data/content";

function TagPill({ children, accent = false }) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-sm ${
        accent
          ? "bg-sky-400/10 text-sky-400 border border-sky-400/30"
          : "bg-slate-800 text-slate-300 border border-slate-700"
      }`}
    >
      {children}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold text-sky-400 mb-4">
              Education
            </h3>
            <p className="text-lg font-medium text-white mb-1">
              {education.school}
            </p>
            {education.degrees.map((d) => (
              <p key={d} className="text-slate-300">
                {d}
              </p>
            ))}
            <p className="text-slate-400 mt-2">
              GPA: {education.gpa} | Graduating {education.gradYear}
            </p>

            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mt-6 mb-3">
              Relevant Courses
            </h4>
            <div className="flex flex-wrap gap-2">
              {education.courses.map((c) => (
                <TagPill key={c}>{c}</TagPill>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold text-sky-400 mb-4">
              Technical Skills
            </h3>

            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Languages
            </h4>
            <div className="flex flex-wrap gap-2 mb-5">
              {skills.languages.map((s) => (
                <TagPill key={s} accent>
                  {s}
                </TagPill>
              ))}
            </div>

            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Developer Tools
            </h4>
            <div className="flex flex-wrap gap-2 mb-5">
              {skills.tools.map((s) => (
                <TagPill key={s}>{s}</TagPill>
              ))}
            </div>

            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Spoken Languages
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.spoken.map((s) => (
                <TagPill key={s}>{s}</TagPill>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
