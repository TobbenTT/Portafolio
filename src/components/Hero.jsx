import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <header id="home" className="hero section">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">Backend Engineer &<br />Architectural Strategist</h1>
                    <p className="hero-subtitle">
                        Especialista en sistemas escalables, optimización de bases de datos y arquitectura de software de alto rendimiento.
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">Ver Proyectos</a>
                        <a href="https://github.com/TobbenTT" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            GitHub (TobbenTT)
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="code-window">
                        <div className="window-header">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                            <span className="window-title">identity.json</span>
                        </div>
                        <div className="window-body">
                            <pre>
                                {`{
  "name": "David Cabezas",
  "alias": "TobbenTT",
  "role": "Backend Engineer",
  "location": "Santiago, CL",
  "stack": [
    "Python", 
    "AWS", 
    "Docker"
  ],
  "status": "Building Scalable Systems..."
}`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
