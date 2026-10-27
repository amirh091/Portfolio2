import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section container bg-light">
      <Reveal className="section-header">
        <p className="eyebrow">03 — COMPÉTENCES</p>
        <h2>
          Ce que je sais faire,
          <br />
          <em>au quotidien.</em>
        </h2>
        <p className="section-desc">
          Trois familles d'outils que j'utilise réellement sur mes projets :
          interfaces, back-end et données, puis déploiement. Pas de pourcentage
          artificiel ni de technologie ajoutée pour faire nombre.
        </p>
      </Reveal>

      <Reveal stagger className="skills-grid">
        <div className="skill-col">
          <div className="skill-col__header">
            <span className="skill-letter">A</span>
            <span className="skill-cat">FRONT-END</span>
          </div>
          <h3>Interfaces & expériences web</h3>
          <p className="skill-sub">
            DU MAQUETTAGE À L'INTERFACE DANS LE NAVIGATEUR
          </p>
          <ul>
            <li>HTML5 / CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>UI/UX Design</li>
            <li>PWA (Progressive Web Apps)</li>
            <li>Interfaces responsives</li>
            <li>Interactions & animations</li>
          </ul>
        </div>

        <div className="skill-col">
          <div className="skill-col__header">
            <span className="skill-letter">B</span>
            <span className="skill-cat">BACK-END</span>
          </div>
          <h3>Applications & données</h3>
          <p className="skill-sub">BACK-END, BASE DE DONNÉES ET SÉCURITÉ</p>
          <ul>
            <li>Supabase</li>
            <li>PostgreSQL</li>
            <li>Edge Functions</li>
            <li>RLS / Sécurité</li>
            <li>Authentification</li>
            <li>Stockage Cloud</li>
          </ul>
        </div>

        <div className="skill-col">
          <div className="skill-col__header">
            <span className="skill-letter">C</span>
            <span className="skill-cat">OUTILS</span>
          </div>
          <h3>Déploiement & productivité</h3>
          <p className="skill-sub">DU DÉPÔT LOCAL À LA MISE EN PRODUCTION</p>
          <ul>
            <li>Git / GitHub</li>
            <li>Vercel / Déploiement</li>
            <li>Scanner Code-barres</li>
            <li>Automatisation de processus</li>
            <li>Veille technologique</li>
          </ul>
        </div>
      </Reveal>
      <Reveal>
        <p className="skills-note">
          <i className="ph ph-info"></i> Ces compétences sont celles mises en
          œuvre dans mes projets E-Touré, Bafing Market et Saga Chatt. La fiche
          de chaque projet précise sa propre stack.
        </p>
      </Reveal>
    </section>
  );
}
