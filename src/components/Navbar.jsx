import { useState, useEffect } from 'react';

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation fluide vers la section ciblée
  const navigate = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#hero" className="navbar__logo" onClick={(e) => navigate(e, '#hero')}>
          <div className="logo-icon"><i className="ph ph-code"></i></div>
          <div>
            <div className="logo-title">Portfolio</div>
            <div className="logo-sub">DÉVELOPPEUR WEB</div>
          </div>
        </a>

        <nav className={`navbar__nav ${isOpen ? 'is-open' : ''}`}>
          <a href="#hero" onClick={(e) => navigate(e, '#hero')}>Accueil</a>
          <a href="#projects" onClick={(e) => navigate(e, '#projects')}>Projets</a>
          <a href="#about" onClick={(e) => navigate(e, '#about')}>À propos</a>
          <a href="#skills" onClick={(e) => navigate(e, '#skills')}>Compétences</a>
          <a href="#process" onClick={(e) => navigate(e, '#process')}>Processus</a>
          <a href="#contact" onClick={(e) => navigate(e, '#contact')}>Contact</a>
        </nav>

        <div className="navbar__actions">
          <button onClick={toggleTheme} className="btn-theme" aria-label="Changer de thème">
            <i className={`ph ph-${theme === 'light' ? 'moon' : 'sun'}`}></i>
          </button>

          <a href="/CV.pdf" download="CV_Cheick_Oumar_Toure.pdf" className="btn btn-outline nav-btn-cv">
            <i className="ph ph-file-text"></i> CV
          </a>
          <a href="#contact" className="btn btn-primary nav-btn-contact" onClick={(e) => navigate(e, '#contact')}>Me contacter</a>

          <button className="burger" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            <i className={`ph ph-${isOpen ? 'x' : 'list'}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
}
