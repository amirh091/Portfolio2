import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="process" className="section container process-section">
      <Reveal className="section-header">
        <p className="eyebrow">04 — MÉTHODE DE TRAVAIL</p>
        <h2>
          Quatre étapes,
          <br />
          <em>aucun détour inutile.</em>
        </h2>
        <p className="section-desc">
          Une méthode simple, appliquée sur chacun de mes projets : comprendre
          avant de dessiner, dessiner avant de coder, et ajuster après la mise
          en ligne.
        </p>
      </Reveal>

      <Reveal stagger className="process-grid">
        <div className="process-card">
          <div className="process-card__top">
            <span className="process-num">01</span>
            <i className="ph ph-magnifying-glass"></i>
          </div>
          <h3>Comprendre le besoin</h3>
          <p>
            Questions, écoute, cadrage écrit. Je reformule l'objectif réel avant
            de parler d'interface.
          </p>
        </div>

        <div className="process-card">
          <div className="process-card__top">
            <span className="process-num">02</span>
            <i className="ph ph-pencil-simple"></i>
          </div>
          <h3>Concevoir une expérience simple</h3>
          <p>
            Structure des pages, parcours utilisateur, priorités visuelles. Le
            plus simple possible, jamais le plus décoré.
          </p>
        </div>

        <div className="process-card">
          <div className="process-card__top">
            <span className="process-num">03</span>
            <i className="ph ph-code"></i>
          </div>
          <h3>Développer et tester</h3>
          <p>
            Construction par blocs réutilisables, vérification sur mobile,
            tablette et ordinateur : correction des défauts.
          </p>
        </div>

        <div className="process-card">
          <div className="process-card__top">
            <span className="process-num">04</span>
            <i className="ph ph-arrows-clockwise"></i>
          </div>
          <h3>Améliorer selon les retours</h3>
          <p>
            Mise en ligne, observation de l'usage réel, ajustements de contenu,
            de vitesse et de clarté.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
