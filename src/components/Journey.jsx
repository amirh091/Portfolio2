import Reveal from "./Reveal";

export default function Journey() {
  return (
    <section id="journey" className="section container">
      <Reveal className="section-header">
        <p className="eyebrow">05 — PARCOURS</p>
        <h2>
          Formation, langues
          <br />
          <em>et centres d'intérêt.</em>
        </h2>
        <p className="section-desc">
          Un parcours construit sur la pratique : formations en ligne, projets
          clients et veille permanente. Les langues et les curiosités techniques
          complètent le tableau.
        </p>
      </Reveal>

      <div className="journey-layout">
        <Reveal direction="right" className="journey-timeline">
          <p className="journey-subtitle">FORMATION & EXPÉRIENCE</p>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <p className="timeline-date">2023 — PRÉSENT</p>
            <h3>Développeur web freelance</h3>
            <p className="timeline-role">AUTO-FORMATION CONTINUE</p>
            <p className="timeline-desc">
              Veille technologique permanente, projets clients et certifications
              en ligne. Chaque mission nourrit directement la suivante.
            </p>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <p className="timeline-date">2022 — 2023</p>
            <h3>Formation en développement web</h3>
            <p className="timeline-role">PARCOURS AUTODIDACTE STRUCTURÉ</p>
            <p className="timeline-desc">
              HTML, CSS, JavaScript, bases de données relationnelles et
              déploiement d'applications en ligne.
            </p>
          </div>
        </Reveal>

        <div className="journey-sidebar">
          <Reveal delay={150} className="journey-box">
            <p className="journey-subtitle">LANGUES</p>
            <div className="lang-item">
              <span>Français</span>
              <span className="lang-level">Langue maternelle</span>
              <div className="lang-bar">
                <div style={{ "--lang-width": "100%" }}></div>
              </div>
            </div>
            <div className="lang-item">
              <span>Anglais</span>
              <span className="lang-level">Technique (lu, écrit)</span>
              <div className="lang-bar">
                <div style={{ "--lang-width": "70%" }}></div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={300} className="journey-box">
            <p className="journey-subtitle">CENTRES D'INTÉRÊT</p>
            <div className="interests-tags">
              <span>VEILLE TECHNOLOGIQUE</span>
              <span>APPLICATIONS INNOVANTES</span>
              <span>UI/UX DESIGN</span>
              <span>OPEN-SOURCE SUR GITHUB</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
