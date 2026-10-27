import Reveal from './Reveal';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg">
        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" alt="Code background" />
      </div>
      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="dot"></span> PORTFOLIO DÉVELOPPEUR
          </div>
          <h2 className="hero__name">
            Cheick Oumar Touré <span className="badge-dispo">DISPONIBLE</span>
          </h2>
          <p className="hero__role">DÉVELOPPEUR WEB FULL-STACK & CRÉATEUR DE SOLUTIONS DIGITALES</p>

          <h1 className="hero__title">
            Je transforme les<br/>idées<br/>
            <em>en produits</em><br/>
            numériques.
          </h1>

          <p className="hero__desc">
            Je conçois et développe des applications web modernes et des solutions SaaS fiables, sécurisées et adaptées aux réalités locales. Mon approche part toujours d'un problème concret : digitaliser un commerce, structurer une marketplace, simplifier une gestion quotidienne.
          </p>
          <p className="hero__desc">
            Expertise en JavaScript, Supabase (PostgreSQL) et Vercel : je construis des outils fiables et sécurisés, du premier écran jusqu'à la mise en production.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-outline">Découvrir mes projets <i className="ph ph-arrow-down"></i></a>
            <a href="#contact" className="btn btn-outline">Me contacter <i className="ph ph-arrow-up-right"></i></a>
            <a href="/CV.pdf" download="CV_Cheick_Oumar_Toure.pdf" className="btn btn-orange">
              <i className="ph ph-download-simple"></i> Télécharger mon CV
            </a>
          </div>

          <div className="hero__contact-info">
            <span><i className="ph ph-envelope"></i> faruckh091@gmail.com</span>
            <span><i className="ph ph-phone"></i> +225 07 09 13 36 88</span>
            <span><i className="ph ph-github-logo"></i> github.com/amirh091</span>
          </div>
        </div>

        {/* Carte de code à droite */}
        <Reveal direction="zoom" delay={600} className="hero__visual">
          <div className="code-card">
            <div className="code-card__header">
              <div className="dots"><span></span><span></span><span></span></div>
              <span className="filename">produit.tsx</span>
            </div>
            <pre className="code-card__body">
              <code>
                <span className="code-line"><span className="code-num">1</span><span className="code-kw">const</span> produit = {'{'}</span>
                <span className="code-line"><span className="code-num">2</span>  <span className="code-prop">objectif</span>: <span className="code-str">'résoudre un besoin réel'</span>,</span>
                <span className="code-line"><span className="code-num">3</span>  <span className="code-prop">interface</span>: <span className="code-str">'claire, rapide, accessible'</span>,</span>
                <span className="code-line"><span className="code-num">4</span>  <span className="code-prop">méthode</span>: <span className="code-str">'apprendre en construisant'</span>,</span>
                <span className="code-line"><span className="code-num">5</span>  <span className="code-prop">statut</span>: <span className="code-str">'en ligne'</span>,</span>
                <span className="code-line"><span className="code-num">6</span>{'}'};</span>
              </code>
            </pre>
          </div>
          <div className="floating-badge badge-responsive">
            <i className="ph ph-device-mobile"></i> RESPONSIVE
          </div>
          <div className="floating-badge badge-live">
            <p className="floating-badge__title">PROJET PUBLIÉ</p>
            <p className="floating-badge__name">Bafing Market</p>
            <p className="floating-badge__status"><span className="dot"></span> Marketplace en ligne</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
