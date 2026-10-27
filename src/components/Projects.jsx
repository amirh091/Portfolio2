import Reveal from "./Reveal";

const PROJECTS = [
  {
    id: "01",
    title: "E-Touré",
    type: "SAAS DE GESTION DE BOUTIQUE",
    desc: "Les commerçants gèrent leur stock et leurs dettes clients sur des cahiers, ce qui entraîne des pertes, des oublis et des erreurs de calcul.",
    features: [
      "Gestion de stock et fiches produits",
      "Point de vente pour encaisser rapidement",
      "Suivi des dettes clients",
    ],
    tags: ["JAVASCRIPT", "SUPABASE", "POSTGRESQL", "EDGE FUNCTIONS"],
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop",
    status: "APPLICATION EN LIGNE",
    demo: false,
    url: 'https://etoure.vercel.app/'
  },
  {
    id: "02",
    title: "Bafing Market",
    type: "MARKETPLACE DE SECONDE MAIN",
    desc: "Les vendeurs d'occasion de Touba manquaient de visibilité, et les acheteurs avaient du mal à trouver des articles de proximité.",
    features: [
      "Système d'authentification des utilisateurs",
      "Publication d'annonces avec upload d'images",
      "Recherche par filtres (catégorie, prix, localisation)",
    ],
    tags: ["HTML5", "CSS3", "JAVASCRIPT", "SUPABASE"],
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
    status: "RÉALISÉ ET EN LIGNE",
    demo: true,
    url: 'https://bafing-market.vercel.app/'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section container bg-light">
      <Reveal className="section-header">
        <p className="eyebrow">01 — PROJETS SÉLECTIONNÉS</p>
        <div className="section-title-row">
          <h2>
            Des projets réels,
            <br />
            <em>pas des exercices.</em>
          </h2>
          <div className="project-count">
            <span>04</span>
            <small>PROJETS DOCUMENTÉS</small>
          </div>
        </div>
        <p className="section-desc">
          Chaque fiche présente le problème traité, les fonctionnalités
          réellement réalisées et les technologies utilisées. Rien n'est ajouté
          pour faire bonne mesure.
        </p>
      </Reveal>

      <Reveal direction="up" stagger className="projects-grid">
        {PROJECTS.map((p) => (
          <article key={p.id} className="project-card">
            <div className="project-card__image">
              <img src={p.img} alt={p.title} />
              <div className="project-card__badges">
                <span className="badge-status">
                  <span className="dot"></span> {p.status}
                </span>
                {p.demo && (
                  <span className="badge-demo">APERÇU DE DÉMONSTRATION</span>
                )}
              </div>
              <span className="project-card__id">{p.id}</span>
            </div>
            <div className="project-card__content">
              <p className="project-card__type">{p.type}</p>
              <h3>{p.title}</h3>
              <p className="project-card__desc">{p.desc}</p>
              <ul className="project-card__features">
                {p.features.map((f, i) => (
                  <li key={i}>
                    <i className="ph ph-check-circle"></i> {f}
                  </li>
                ))}
              </ul>
              <div className="project-card__tags">
                {p.tags.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
              <div className="project-card__actions">
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="link-arrow">
                        Découvrir le projet <i className="ph ph-arrow-right"></i>
                </a>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                <i className="ph ph-arrow-square-out"></i> Voir l'application
                </a>
              </div>
            </div>
          </article>
        ))}
      </Reveal>
    </section>
  );
}
