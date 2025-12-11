import React from 'react';
import './Certificates.css';

const certificates = [
    {
        id: 1,
        name: 'Scrum Foundation Professional Certification (SFPC™)',
        issuer: 'CertiProf',
        date: 'Dic 2024',
        url: 'https://www.credly.com/badges/1621037e-12db-45e1-a745-95ffdc4ca3d6/linked_in_profile' 
    },
    {
        id: 2,
        name: 'CCNA: Introduction to Networks',
        issuer: 'Cisco',
        date: 'Jul 2024',
        url: 'https://www.credly.com/badges/6c12373f-e115-4809-8b02-f4c42417d6ad/linked_in_profile'
    },
    {
        id: 3,
        name: 'AWS Academy Graduate - Cloud Foundations',
        issuer: 'Amazon Web Services (AWS)',
        date: 'Jun 2024',
        url: 'https://www.credly.com/badges/c3cadfd5-77ea-4411-9f9c-1d817d8ace78/linked_in_profile'
    },
    {
        id: 4,
        name: 'Python 101 for Data Science',
        issuer: 'IBM',
        date: 'Dic 2023',
        url: 'https://courses.cognitiveclass.ai/certificates/e2d56b11824440faae67c37ab9e5f2f7'
    },
    {
        id: 5,
        name: 'Curso de Desarrollo de Apps Móviles',
        issuer: 'Google',
        date: 'Oct 2023',
        url: 'https://skillshop.exceedlms.com/student/award/4g5tELs6veoVs7Byg58TfCjc'
    },
    {
        id: 6,
        name: 'Google Analytics Avanzado',
        issuer: 'Google',
        date: 'Sept 2023',
        url: ''
    },
    {
        id: 7,
        name: 'Introduction to Cybersecurity',
        issuer: 'Cisco',
        date: 'Abr 2023',
        url: 'https://www.credly.com/badges/696fadb1-69ed-405f-980d-f78218a0ee37/linked_in_profile'
    }
];

const Certificates = () => {
    return (
        <section id="certificates" className="certificates section">
            <h2 className="section-title">Certifications & Licenses</h2>
            <div className="certificates-grid">
                {certificates.map(cert => (
                    <a
                        key={cert.id}
                        href={cert.url}
                        className="certificate-card"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver credencial de ${cert.name}`}
                    >
                        <div className="cert-header">
                            <span className="cert-issuer">{cert.issuer}</span>
                            <span className="cert-date">{cert.date}</span>
                        </div>
                        <h3 className="cert-name">{cert.name}</h3>
                        <div className="cert-icon">↗</div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Certificates;
