// Footer.js
import React from 'react';
import '../css/Footer.css';
import linkedinIcon from '../icons/LinkedIn.svg';
import gmailIcon from '../icons/gmail.png';
import githubIcon from '../icons/GitHub.svg';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <button className="back-to-top" onClick={scrollToTop}>
                Back to Top
            </button>
            <div className="footer-social-links">
                <a href="https://www.linkedin.com/in/lucas-aurelio-n" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                    <img src={linkedinIcon} alt="LinkedIn" className="footer-social-icon" />
                </a>
                {/* <a href="mailto:lucas.aure.io.n@gmail.com" className="footer-social-link">
                    <img src={gmailIcon} alt="Gmail" className="footer-social-icon" />
                </a> */}
                <a href="https://github.com/Lucas11011" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                    <img src={githubIcon} alt="GitHub" className="footer-social-icon dark-mode-white" />
                </a>
            </div>
            <p>&copy; {new Date().getFullYear()} Lucas Aurelio</p>
        </footer>
    );
}

export default Footer;