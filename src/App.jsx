import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "./components/Home";
import KorazonPage from "./pages/KorazonPage";
import DadipPage from "./pages/DadipPage";
import TiagoPage from "./pages/TiagoPage";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/korazon" element={<KorazonPage />} />
        <Route path="/project/dadip" element={<DadipPage />} />
        <Route path="/project/tiago" element={<TiagoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
