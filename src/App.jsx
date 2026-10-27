import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillsMarquee from "./components/SkillsMarquee";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Process from "./components/Process";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // On vérifie si l'utilisateur a déjà un thème sauvegardé, sinon on met 'light'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // À chaque fois que le thème change, on met à jour le localStorage et le body
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`app-wrapper ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <SkillsMarquee />
        <Projects />
        <About />
        <Skills />
        <Process />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

/** Bouton flottant "retour en haut" */
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setVisible(window.scrollY > 500);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <button
        type="button"
        className={`back-to-top ${visible ? "visible" : ""}`}
        aria-label="Retour en haut de la page"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="ph ph-arrow-up"></i>
      </button>
    </>
  );
}
