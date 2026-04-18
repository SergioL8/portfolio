import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}
