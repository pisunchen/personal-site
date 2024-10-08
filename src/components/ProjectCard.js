import React from 'react';

const ProjectCard = ({ title, description, technologies, image, link }) => {
    return (
        <div className="project-card">
            <a href={link}>
                <img src={image} alt={`${title} thumbnail`} className="project-image" loading='lazy'/>
                <div className="project-content">
                    <h3 className="project-title">{title}</h3>
                    <p className="project-description">{description}</p>
                    <div className="project-technologies">
                        {technologies.map((tech, index) => (
                            <span key={index} className="project-tech">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </a>
        </div>
    );
};

export default ProjectCard;