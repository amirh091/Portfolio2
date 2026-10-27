export default function SkillsMarquee() {
  // La liste de tes compétences
  const skills = [
    "React", "JavaScript", "Supabase", "PostgreSQL", 
    "Node.js", "HTML5", "CSS3", "Tailwind CSS", 
    "Vite", "Git", "Vercel", "Figma"
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {/* On affiche la liste deux fois pour créer l'effet de boucle infinie */}
        {skills.map((skill, index) => (
          <span key={`1-${index}`} className="marquee-item">
            {skill} <i className="ph ph-asterisk"></i>
          </span>
        ))}
        {skills.map((skill, index) => (
          <span key={`2-${index}`} className="marquee-item">
            {skill} <i className="ph ph-asterisk"></i>
          </span>
        ))}
      </div>
    </div>
  );
}