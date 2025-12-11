import React from 'react';
import './TechStack.css';

const techGroups = [
    {
        category: "Core Engineering",
        items: [
            { name: 'Python', level: 'Advanced' },
            { name: 'PHP', level: 'Expert' },
            { name: 'Java', level: 'Proficient' }
        ]
    },
    {
        category: "Data & Storage",
        items: [
            { name: 'MySQL', level: 'Advanced' },
            { name: 'PostgreSQL', level: 'Proficient' },
            { name: 'Redis', level: 'Intermediate' }
        ]
    },
    {
        category: "Infrastructure & Cloud",
        items: [
            { name: 'AWS', level: 'Certified' },
            { name: 'Docker', level: 'Advanced' },
            { name: 'CI/CD', level: 'Proficient' }
        ]
    }
];

const TechStack = () => {
    return (
        <section id="stack" className="stack section">
            <h2 className="section-title">Technical Expertise</h2>
            <div className="tech-groups">
                {techGroups.map((group) => (
                    <div key={group.category} className="tech-group">
                        <h3 className="group-title">{group.category}</h3>
                        <ul className="tech-list">
                            {group.items.map((tech) => (
                                <li key={tech.name} className="tech-item">
                                    <span className="tech-name">{tech.name}</span>
                                    <span className="tech-level">{tech.level}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
