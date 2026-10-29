import { motion } from 'framer-motion';

const PROJECTS = [
  {
    title: 'FactuFlow',
    type: 'SAAS DE FACTURATION',
    desc: "Application web complète permettant aux freelances et TPE de gérer leurs clients, créer des factures avec calculs automatiques (HT/TVA/TTC) et générer des PDF professionnels.",
    tags: ['React 19', 'Supabase', 'PostgreSQL', 'Vercel', 'PWA'],
    // Mets ici une capture d'écran de ton dashboard FactuFlow
    img: '/factuflow-preview.png', 
    link: 'https://factuflow-a.vercel.app/',
    status: 'En ligne'
  },
  {
    title: 'E-Touré',
    type: 'SAAS DE GESTION DE BOUTIQUE',
    desc: "Plateforme pour les commerçants de Touba leur permettant de digitaliser leur stock, gérer les dettes clients et encaisser rapidement.",
    tags: ['JavaScript', 'Supabase', 'PostgreSQL', 'Edge Functions'],
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop',
    link: '#', // À remplacer par le vrai lien
    status: 'En ligne'
  },
  {
    title: 'Bafing Market',
    type: 'MARKETPLACE DE SECONDE MAIN',
    desc: "Marketplace de proximité permettant aux vendeurs d'occasion de publier des annonces et aux acheteurs de trouver des articles près de chez eux.",
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Supabase'],
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop',
    link: '#',
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
          <motion.div 
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="project-image">
              <img src={project.img} alt={project.title} />
              <span className="project-status">{project.status}</span>
            </div>
            
            <div className="project-content">
              <p className="project-type">{project.type}</p>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                {project.link !== '#' ? "Voir l'application en direct →" : "En savoir plus →"}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}