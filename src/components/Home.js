// import React from 'react';
import '../css/Home.css';
import reactIcon from '../icons/React.svg';
import jsIcon from '../icons/JavaScript.svg';
import htmlIcon from '../icons/HTML5.svg';
import cssIcon from '../icons/CSS3.svg';
import figmaIcon from '../icons/Figma.svg';
import locationIcon from '../icons/geo-alt-fill.svg';
import linkedinIcon from '../icons/LinkedIn.svg';
// import gmailIcon from '../icons/gmail.png';
import typescriptIcon from '../icons/TypeScript.svg';
// import nodejsIcon from '../icons/Node.js.svg';
import nextjsIcon from '../icons/Next.js.png';
import githubIcon from '../icons/GitHub.svg';
import downloadIcon from '../icons/download.svg';
// import resume from '../resume/Lucas_Aurelio_Resume.pdf';
import resume from '../resume/Lucas_Aurelio_Resume.pdf';

function Home() {
    return (
        <div className="home-content">
            <p className="home-eyebrow">SOFTWARE ENGINEER - <span className="eyebrow-nowrap">FRONTEND FOCUSED</span></p>
            <h1>
                Lucas <span className="last-name-gradient">Aurelio</span>
            </h1>
            <p className="home-summary">
                Frontend engineer bringing designs to life through pixel-perfect implementation. Passionate about building engaging user experiences.
            </p>
            <div className="home-location-chip">
                <span className="home-icon-badge">
                    <img src={locationIcon} alt="Location" className="location-icon" />
                    <span className="home-icon-name">NH / MA</span>
                </span>
                NH / MA
            </div>
            <div className="tech-stack">
                <span className="tech-stack-label">My Focus:</span>
                <span className="home-icon-badge">
                    <img src={reactIcon} alt="React" className="tech-stack-icon" />
                    <span className="home-icon-name">React</span>
                </span>
                <span className="home-icon-badge">
                    <img src={typescriptIcon} alt="TypeScript" className="tech-stack-icon" />
                    <span className="home-icon-name">TypeScript</span>
                </span>
                <span className="home-icon-badge">
                    <img src={nextjsIcon} alt="Next.js" className="tech-stack-icon" />
                    <span className="home-icon-name">Next.js</span>
                </span>
                <span className="home-icon-badge">
                    <img src={jsIcon} alt="JavaScript" className="tech-stack-icon" />
                    <span className="home-icon-name">JavaScript</span>
                </span>
                <span className="home-icon-badge">
                    <img src={htmlIcon} alt="HTML5" className="tech-stack-icon" />
                    <span className="home-icon-name">HTML5</span>
                </span>
                <span className="home-icon-badge">
                    <img src={cssIcon} alt="CSS3" className="tech-stack-icon" />
                    <span className="home-icon-name">CSS3</span>
                </span>
                {/* <img src={nodejsIcon} alt="Node.js" className="tech-stack-icon" title="Node.js" /> */}
                <span className="home-icon-badge">
                    <img src={figmaIcon} alt="Figma" className="tech-stack-icon" />
                    <span className="home-icon-name">Figma</span>
                </span>
            </div>
            <div className="social-links">
                {/* <a href={resume} download="Lucas_Aurelio_Resume.pdf" className="social-link resume-link"> */}
                <a href={resume} download="Lucas_Aurelio_Resume_Software_Engineer.pdf" className="social-link resume-link">
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
