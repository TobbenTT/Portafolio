import React from 'react';
import './Philosophy.css';

const values = [
    {
        title: 'Performance First',
        description: 'Optimización agresiva de queries y código para reducir latencia. Cada milisegundo cuenta en la experiencia de usuario.',
        icon: '⚡'
    },
    {
        title: 'Arquitectura Escalable',
        description: 'Diseño de sistemas modulares preparados para crecer. Microservicios y patrones de diseño sólidos desde el día uno.',
        icon: '🏗️'
    },
    {
        title: 'Seguridad Integral',
        description: 'Implementación de mejores prácticas de seguridad y protección de datos. Código robusto contra vulnerabilidades.',
        icon: '🛡️'
    }
];

const Philosophy = () => {
    return (
        <section className="philosophy section">
            <div className="philosophy-header">
                <h2 className="section-title">Mi Enfoque Técnico</h2>
                <p className="section-subtitle">No solo escribo código. Construyo soluciones resilientes.</p>
            </div>
            <div className="philosophy-grid">
                {values.map((item) => (
                    <div key={item.title} className="philosophy-card">
                        <div className="icon-wrapper">{item.icon}</div>
                        <h3 className="value-title">{item.title}</h3>
                        <p className="value-description">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Philosophy;
