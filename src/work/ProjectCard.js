import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import '../styles/Work.css';

const ProjectCard = ({ title, description, githubLink, tags, direction }) => {
    const slideIn = {
        hidden: {
            opacity: 0,
            x: direction === 'left' ? -150 : 150, // from left or right
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    return (
        <div className={`project-card-container ${direction}`}>
            <div className="timeline-marker">
                <span className={`arrow ${direction}`}>&#10148;</span>
            </div>

            <motion.div
                className="project-card"
                variants={slideIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
            >
                <h4 className="project-title">{title}</h4>
                <p className="project-desc">{description}</p>

                <div className="tags">
                    {tags.map((tag, idx) => (
                        <span key={idx} className="tag-pill">
                            {tag}
                        </span>
                    ))}
                </div>

                <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                >
                    <FaGithub /> View on GitHub
                </a>
            </motion.div>
        </div>
    );
};

export default ProjectCard;
