import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function App() {
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
