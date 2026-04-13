import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Experience
        </h2>

        <div className="relative border-l-2 border-slate-700 ml-4">
          {experience.map((exp, i) => (
            <div key={i} className="mb-12 ml-8 relative">
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-sky-400 border-4 border-slate-900" />

              <span className="text-sm text-sky-400 font-medium">
                {exp.period}
              </span>
              <h3 className="text-lg font-bold text-white mt-1">{exp.role}</h3>
              <p className="text-slate-400 text-sm mb-3">
                {exp.company} &mdash; {exp.location}
              </p>

              <ul className="text-slate-300 text-sm space-y-2">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-sky-400 mt-0.5 shrink-0">&#8250;</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
