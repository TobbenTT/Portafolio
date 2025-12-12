import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    return (
        <article className="project-card">
            <div className="card-image-container">
                <img src={project.image} alt={project.title} className="card-image" />
                {project.status === 'video' && (
                    <div className="play-overlay">▶</div>
                )}
            </div>

            <div className="card-content">
                <div className="card-tags">
                    {project.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>
                <h3 className="card-title">
                    {project.title}
                    {project.status === 'online' && <span className="status-dot" title="Online"></span>}
                </h3>
                <p className="card-description">{project.description}</p>
            </div>
        </article>
    );
};

export default ProjectCard;
