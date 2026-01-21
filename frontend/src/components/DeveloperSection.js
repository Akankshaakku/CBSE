import React from 'react';
import './DeveloperSection.css';

const DeveloperSection = () => {
    return (
        <section className="developer-section">
            <div className="container">
                <div className="developer-card">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-5 mb-4 mb-md-0">
                            <div className="developer-image-wrapper">
                                <img
                                    src="/image/developer-akash.jpg"
                                    alt="Akash Singh - Full Stack Developer"
                                    className="developer-image"
                                />
                                <div className="image-overlay">
                                    <a
                                        href="https://www.linkedin.com/in/akash-singh-6bb244214/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="linkedin-badge"
                                        aria-label="Connect on LinkedIn"
                                    >
                                        <i className="fab fa-linkedin"></i>
                                        <span>Connect on LinkedIn</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-7">
                            <div className="developer-content">
                                <div className="developer-badge">
                                    <i className="fas fa-code"></i>
                                    <span>Developed by</span>
                                </div>
                                <h2 className="developer-name-large">Akash Singh</h2>
                                <h4 className="developer-role">Full Stack Developer</h4>
                                <p className="developer-institution-text">
                                    <i className="fas fa-graduation-cap"></i>
                                    MITS Gwalior
                                </p>
                                <p className="developer-bio">
                                    Passionate about creating modern, responsive web applications with cutting-edge technologies.
                                    Specialized in full-stack development with expertise in React, Node.js, and modern web design principles.
                                </p>
                                <div className="developer-actions">
                                    <a
                                        href="https://www.linkedin.com/in/akash-singh-6bb244214/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary-new"
                                    >
                                        <i className="fab fa-linkedin me-2"></i>
                                        View LinkedIn Profile
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeveloperSection;
