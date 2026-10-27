import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section container">
      <div className="about-layout">
        <Reveal direction="right" className="about-image">
          <p className="eyebrow">02 — À PROPOS</p>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop"
            alt="Bureau"
          />
          <div className="about-image__overlay">
            <p>
              BASÉ À TOUBA
              <br />
              <strong>Côte d'Ivoire</strong>
            </p>
            <div className="icon-circle">
              <i className="ph ph-user"></i>
            </div>
          </div>
        </Reveal>
        <div className="about-content">
          <Reveal>
            <h2>
              Je construis des outils,
              <br />
              <em>projet après projet.</em>
            </h2>
            <p className="about-desc">
              Développeur web full-stack passionné, spécialisé dans la
              conception d'applications web modernes et de solutions SaaS. Fort
              d'une expertise en JavaScript, Supabase (PostgreSQL) et Vercel, je
              transforme des problèmes concrets en outils fiables et
              accessibles.
            </p>
          </Reveal>

          <Reveal stagger className="about-cards">
            <div className="about-card">
              <div className="icon-box">
                <i className="ph ph-lightning"></i>
              </div>
              <h4>Des outils pour de vrais usages</h4>
              <p>
                Digitalisation du commerce, gestion de dettes clients,
                marketplace de proximité : je pars du quotidien des utilisateurs
                avant de choisir une technologie.
              </p>
            </div>
            <div className="about-card">
              <div className="icon-box">
                <i className="ph ph-shield-check"></i>
              </div>
              <h4>Sécurité et fiabilité</h4>
              <p>
                Authentification, politiques RLS sur PostgreSQL et données
                protégées : la sécurité fait partie de la conception, pas d'une
                correction après coup.
              </p>
            </div>
            <div className="about-card">
              <div className="icon-box">
                <i className="ph ph-device-mobile"></i>
              </div>
              <h4>Pensé mobile et hors-ligne</h4>
              <p>
                Applications installables (PWA), mode hors-ligne et scanner de
                code-barres : les outils doivent fonctionner là où la connexion
                est incertaine.
              </p>
            </div>
            <div className="about-card">
              <div className="icon-box">
                <i className="ph ph-layout"></i>
              </div>
              <h4>Clarté avant les effets</h4>
              <p>
                Hiérarchie visuelle, espacements et lisibilité avant
                l'animation. Une interface doit se comprendre sans mode
                d'emploi.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
