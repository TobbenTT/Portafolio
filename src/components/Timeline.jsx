import React from 'react';
import './Timeline.css';

const events = [
    {
        year: '2024 - Presente',
        title: 'Backend Architecture Specialization',
        description: 'Enfoque en sistemas distribuidos, AWS y patrones de diseño avanzados. Obtención de certificaciones clave (CCNA, AWS Cloud).',
        active: true
    },
    {
        year: '2023 - 2024',
        title: 'Full Stack & Data Science Foundations',
        description: 'Inmersión en Python para Data Science (IBM) y desarrollo móvil (Google). Construcción de bases sólidas en programación.',
    },
    {
        year: '2023',
        title: 'Inicio en Ingeniería Informática',
        description: 'Comienzo de estudios en INACAP. Primeros pasos en algoritmos, bases de datos y lógica de programación.',
    }
];

const Timeline = () => {
    return (
        <section id="trajectory" className="timeline section">
            <h2 className="section-title">Trayectoria</h2>
            <div className="timeline-container">
                {events.map((event, index) => (
                    <div key={index} className={`timeline-item ${event.active ? 'active' : ''}`}>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <span className="timeline-year">{event.year}</span>
                            <h3 className="timeline-title">{event.title}</h3>
                            <p className="timeline-description">{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;
