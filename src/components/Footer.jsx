import Reveal from './Reveal';

// Calculé une seule fois hors du rendu (fonction pure exigée par React Compiler)
const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <Reveal className="container footer-grid">
        <div className="footer-brand">
          <p className="eyebrow">DÉVELOPPEUR WEB FULL-STACK & CRÉATEUR DE SOLUTIONS DIGITALES</p>
          <h2>Cheick Oumar Touré</h2>
          <p className="footer-desc">Je transforme les idées<br/>en produits numériques.</p>
          <p className="footer-desc-small">Applications web et solutions SaaS pensées pour des besoins concrets : commerce, marketplace et gestion quotidienne.</p>
        </div>

        <div className="footer-links">
          <div>
            <p className="footer-title">NAVIGATION</p>
            <a href="#hero">Accueil</a>
            <a href="#projects">Projets</a>
            <a href="#about">À propos</a>
            <a href="#skills">Compétences</a>
          </div>
          <div>
            <p className="footer-title">RESSOURCES</p>
            <a href="#process">Processus de travail</a>
            <a href="#journey">Parcours</a>
            <a href="#contact">Contact</a>
            <a href="/CV.pdf">Télécharger le CV</a>
            <a href="#">E-Touré</a>
            <a href="#">Bafing Market</a>
            <a href="#">Saga Chatt</a>
          </div>
          <div>
            <p className="footer-title">COORDONNÉES</p>
            <p><i className="ph ph-map-pin"></i> Touba, Côte d'Ivoire</p>
            <p><i className="ph ph-envelope"></i> faruckh091@gmail.com</p>
            <p><i className="ph ph-phone"></i> +225 07 09 13 36 88</p>
            <p><i className="ph ph-github-logo"></i> github.com/amirh091</p>
          </div>
        </div>
      </Reveal>
      <div className="container footer-bottom">
        <p>© {CURRENT_YEAR} — CHEICK OUMAR TOURÉ</p>
        <p><span className="dot"></span> CONÇU ET DÉVELOPPÉ PAR MES SOINS</p>
      </div>
    </footer>
  );
}
