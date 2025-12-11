import React from 'react';
import './ContactCTA.css';

const ContactCTA = () => {
    return (
        <section className="contact-cta section">
            <div className="cta-content">
                <h2 className="cta-title">¿Listo para escalar tu próximo proyecto?</h2>
                <p className="cta-text">
                    Estoy disponible para colaborar en soluciones backend robustas y eficientes.
                    Hablemos de código, arquitectura o datos.
                </p>
                <div className="cta-buttons">
                    <a href="mailto:david.cabezas.armando@gmail.com" className="btn btn-primary cta-btn">
                        Enviar Correo
                    </a>
                    <a
                        href="https://www.linkedin.com/in/david-cabezas-a91554284"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline cta-btn"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
