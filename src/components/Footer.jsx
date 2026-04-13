import { personalInfo } from "../data/content";

export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-slate-950 border-t border-slate-800 text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href={`mailto:${personalInfo.email}`}
          className="text-slate-400 hover:text-white transition-colors text-sm"
        >
          {personalInfo.email}
        </a>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white transition-colors text-sm"
        >
          GitHub
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white transition-colors text-sm"
        >
          LinkedIn
        </a>
      </div>
      <p className="text-slate-600 text-xs">
        Built with React & Tailwind CSS
      </p>
    </footer>
  );
}
