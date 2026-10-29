import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <span className="hero-badge">
            <span className="badge-dot"></span> Disponible pour missions
          </span>
          <h1 className="hero-title">
            Je construis des <span className="text-accent">interfaces web</span><br />
            rapides, accessibles et durables.
          </h1>
          <p className="hero-lead">
            Développeur Full-Stack orienté produit. J'aime les bases propres, 
            les animations discrètes et les utilisateurs qui n'ont jamais à 
            réfléchir pour trouver ce qu'ils cherchent.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">Voir mes projets</a>
            <a href="#contact" className="btn btn-outline">Me contacter</a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="hero-image-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="hero-image-glow"></div>
        <img src="/profil.png" alt="Cheikh Oumar Touré" className="hero-image" />
      </motion.div>
    </section>
  );
}