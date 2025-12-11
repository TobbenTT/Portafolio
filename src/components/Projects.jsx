import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const projectsData = [
    {
        id: 1,
        title: 'ColegioApp',
        description: 'Plataforma de gestión escolar integral con módulos para asistencia, calificaciones y comunicación.',
        tags: ['PHP', 'MySQL', 'Bootstrap'],
        image: 'https://placehold.co/600x340/e2e8f0/1e293b?text=ColegioApp',
        demoUrl: '#',
        status: 'online'
    },
    {
        id: 2,
        title: 'Bitware',
        description: 'Solución de arquitectura backend para procesamiento de datos masivos en tiempo real.',
        tags: ['Python', 'AWS', 'FastAPI'],
        image: 'https://placehold.co/600x340/e2e8f0/1e293b?text=Bitware',
        demoUrl: '#',
        status: 'video'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects section">
            <h2 className="section-title">Proyectos Destacados</h2>
            <div className="projects-grid">
                {projectsData.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
