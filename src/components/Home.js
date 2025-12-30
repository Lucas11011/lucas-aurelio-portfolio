import React from 'react';
import '../css/Home.css';
import reactIcon from '../icons/React.svg';
import jsIcon from '../icons/JavaScript.svg';
import htmlIcon from '../icons/HTML5.svg';
import cssIcon from '../icons/CSS3.svg';
import figmaIcon from '../icons/Figma.svg';
import locationIcon from '../icons/geo-alt-fill.svg';
import linkedinIcon from '../icons/LinkedIn.svg';
import gmailIcon from '../icons/gmail.png';
import githubIcon from '../icons/GitHub.svg';
import downloadIcon from '../icons/download.svg';
import resume from '../resume/LucasAuerlio_Resume.pdf';

function Home() {
    return (
        <div className="home-content">
            <p className="home-eyebrow">Product-minded frontend engineer</p>
            <h1>
                Lucas <span className="last-name-gradient">Aurelio</span>
            </h1>
            <p className="home-summary">
                I design and build expressive, high-performing web experiences focused on quality, usability, and accessibility.
            </p>
            <div className="home-location-chip">
                <img src={locationIcon} alt="Location" className="location-icon" title="NH" />
                NH
            </div>
            <div className="tech-stack">
                <span className="tech-stack-label">My Focus:</span>
                <img src={reactIcon} alt="React" className="tech-stack-icon" title="React" />
                <img src={jsIcon} alt="JavaScript" className="tech-stack-icon" title="JavaScript" />
                <img src={htmlIcon} alt="HTML5" className="tech-stack-icon" title="HTML5" />
                <img src={cssIcon} alt="CSS3" className="tech-stack-icon" title="CSS3" />
                <img src={figmaIcon} alt="Figma" className="tech-stack-icon" title="Figma" />
            </div>
            <div className="social-links">
                <a href={resume} download="LucasAurelio_Resume.pdf" className="social-link resume-link">
                    <span>Resume</span>
                    <img src={downloadIcon} alt="Download" className="social-icon download-icon dark-mode-white" />
                </a>
                <a href="https://www.linkedin.com/in/lucas-aurelio-n" target="_blank" rel="noopener noreferrer" className="social-link">
                    <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
                </a>
                {/* <a href="mailto:lucas.aurelio.n@gmail.com" className="social-link">
                    <img src={gmailIcon} alt="Gmail" className="social-icon" />
                </a> */}
                <a href="https://github.com/Lucas11011" target="_blank" rel="noopener noreferrer" className="social-link">
                    <img src={githubIcon} alt="GitHub" className="social-icon dark-mode-white" />
                </a>
            </div>
        </div>
    );
}

export default Home;