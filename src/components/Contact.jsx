import { useState } from 'react';

export default function Contact() {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // '', 'loading', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Récupération des données du formulaire
    const formData = new FormData(e.target);
    
    // ⚠️ REMPLACE LA LIGNE CI-DESSOUS PAR TA PROPRE CLÉ WEB3FORMS
    formData.append("access_key", "91641bf4-dc80-4ac3-aee6-aaa8d180ab20");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setMessage('');
        e.target.reset(); // Vide le formulaire
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section bg-dark">
      <div className="container contact-layout">
        <div className="contact-info">
          <p className="eyebrow">06 — CONTACT</p>
          <h2>Vous avez un projet en tête ?<br/><em>Parlons-en.</em></h2>
          <p className="contact-desc">Un site à construire, une interface à reprendre, une idée à clarifier ? Écrivez-moi quelques lignes : je réponds avec une proposition honnête, sans promesse que je ne peux pas tenir.</p>
          
          <div className="contact-cards">
            <div className="contact-card">
              <i className="ph ph-envelope"></i>
              <div>
                <p className="contact-card__label">EMAIL</p>
                <p className="contact-card__value">faruckh091@gmail.com</p>
                <p className="contact-card__sub">Réponse sous 24 à 48 heures</p>
              </div>
            </div>
            <div className="contact-card">
              <i className="ph ph-whatsapp-logo"></i>
              <div>
                <p className="contact-card__label">TÉLÉPHONE / WHATSAPP</p>
                <p className="contact-card__value">+225 07 09 13 36 88</p>
                <p className="contact-card__sub">Appel ou message direct</p>
              </div>
            </div>
            <div className="contact-card">
              <i className="ph ph-github-logo"></i>
              <div>
                <p className="contact-card__label">GITHUB</p>
                <p className="contact-card__value">github.com/amirh091</p>
                <p className="contact-card__sub">Code source et projets publics</p>
              </div>
            </div>
          </div>

          <p className="contact-footer"><span className="dot"></span> OUVERT AUX OPPORTUNITÉS &nbsp;&nbsp; <i className="ph ph-map-pin"></i> CÔTE D'IVOIRE</p>
        </div>

        <div className="contact-form-wrapper">
          <div className="contact-form-header">
            <p className="eyebrow">FORMULAIRE DE CONTACT</p>
            <h3>Écrivez-moi</h3>
            <span className="badge-fonctionnel"><span className="dot"></span> FONCTIONNEL</span>
          </div>
          <p className="contact-form-note">Les messages sont réellement envoyés et enregistrés. Aucun faux message de confirmation.</p>
          
          <form onSubmit={handleSubmit} className="contact-form">
            {/* Honeypot anti-spam (caché) */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <div className="form-row">
              <div className="input-group">
                <label>NOM</label>
                <input type="text" name="name" placeholder="Votre nom" required />
              </div>
              <div className="input-group">
                <label>EMAIL</label>
                <input type="email" name="email" placeholder="vous@exemple.com" required />
              </div>
            </div>
            
            <div className="input-group">
              <label>TYPE DE PROJET</label>
              <select name="project_type">
                <option>Site vitrine</option>
                <option>Application Web</option>
                <option>Autre</option>
              </select>
            </div>

            <div className="input-group">
              <div className="label-row">
                <label>MESSAGE</label>
                <span>{message.length}/500</span>
              </div>
              <textarea 
                name="message"
                rows="5" 
                placeholder="Décrivez votre besoin en quelques lignes."
                maxLength="500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-submit" disabled={status === 'loading'}>
              {status === 'loading' ? (
                <>Envoi en cours...</>
              ) : (
                <><i className="ph ph-paper-plane-right"></i> Envoyer le message</>
              )}
            </button>

            {status === 'success' && <p className="success-msg">Message envoyé avec succès ! Je vous répondrai très vite.</p>}
            {status === 'error' && <p className="error-msg" style={{ color: 'red', textAlign: 'center', marginTop: '16px' }}>Une erreur est survenue. Réessayez plus tard.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}