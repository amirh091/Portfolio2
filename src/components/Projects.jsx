import { motion } from 'framer-motion';

const PROJECTS = [
  {
    title: 'FactuFlow',
    type: 'SAAS DE FACTURATION',
    desc: "Application web complète permettant aux freelances et TPE de gérer leurs clients, créer des factures avec calculs automatiques (HT/TVA/TTC) et générer des PDF professionnels. Système d'authentification sécurisé et PWA installable.",
    tags: ['React 19', 'Supabase', 'PostgreSQL', 'PDF', 'PWA'],
    img: '/factuflow-preview.png', 
    link: 'https://factuflow-a.vercel.app/',
    status: 'En ligne'
  },
  {
    title: 'Assistant IA E-Touré',
    type: 'INTELLIGENCE ARTIFICIELLE',
    desc: "Chatbot intelligent conçu pour l'entreprise E-Touré Service. Capable de répondre aux questions des clients, d'estimer des prix et de qualifier les demandes de devis 24h/24.",
    tags: ['JavaScript', 'API IA', 'NLP', 'Netlify'],
    img: '/chatbot-preview.png',
    link: 'https://chatbot-e-toure-service.netlify.app/',
    status: 'En ligne'
  },
  {
    title: 'Saga Chat',
    type: 'MESSAGERIE EN TEMPS RÉEL',
    desc: "Application de messagerie instantanée avec indicateur de frappe, statuts de lecture (✓✓), sons de notification et suppression de messages. Interface PWA installable et responsive.",
    tags: ['JavaScript', 'Supabase Realtime', 'WebSockets', 'PWA'],
    img: '/saga-chat-preview.png',
    link: 'https://saga-chatt.netlify.app/',
    status: 'En ligne'
  },
  {
    title: 'E-Touré Service',
    type: 'SITE VITRINE & SEO',
    desc: "Site vitrine pour une entreprise de transport et dépannage (France & Belgique). Design moderne, présentation des services, tarifs et formulaire de contact intelligent redirigeant vers WhatsApp.",
    tags: ['HTML5', 'CSS3', 'SEO', 'Responsive'],
    img: '/e-toure-preview.png',
    link: 'https://e-toure-service.netlify.app/',
    status: 'En ligne'
  },
  {
    title: 'Toure Track',
    type: 'LOGISTIQUE & GESTION',
    desc: "Plateforme de gestion de livraisons permettant de suivre les expéditions, gérer les chauffeurs et visualiser les performances en temps réel via un tableau de bord dédié.",
    tags: ['React', 'Supabase', 'Logistique', 'Dashboard'],
    img: '/toure-track-preview.png',
    link: 'https://toure-track.vercel.app/',
    status: 'En ligne'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <div className="section-header">
        <p className="section-eyebrow">01 — PROJETS SÉLECTIONNÉS</p>
        <h2 className="section-title">Des projets réels,<br/><em>pas des exercices.</em></h2>
        <p className="section-desc">Chaque fiche présente le problème traité, les fonctionnalités réellement réalisées et les technologies utilisées.</p>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="project-image">
              <div className="project-image-frame">
                <img src={project.img} alt={`Aperçu de ${project.title}`} loading="lazy" decoding="async" />
              </div>
              <span className="project-status">{project.status}</span>
            </div>
            
            <div className="project-content">
              <p className="project-type">{project.type}</p>
              <h3 className="project-title">{project.title}</h3>
              <div className="project-divider" aria-hidden="true" />
              <p className="project-desc">{project.desc}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                Voir l'application en direct →
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="projects-more">
        <a
          href="https://github.com/amirh091"
          target="_blank"
          rel="noopener noreferrer"
          className="projects-more-link"
        >
          <i className="ph ph-github-logo" aria-hidden="true"></i>
          Voir tous mes projets sur GitHub
          <span className="arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}