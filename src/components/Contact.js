// Contact.js
import React, { useState } from 'react';
import '../css/Contact.css';
import boxArrowIcon from '../icons/box-arrow-up-left.svg';
import downloadIcon from '../icons/download.svg';
import copyIcon from '../icons/copy.svg';
import resume from '../resume/LucasAurelio_Resume.pdf';

function Contact() {
    const [copyMessage, setCopyMessage] = useState('');
    const email = 'lucas.aurelio.n@gmail.com';

    // Copy email to clipboard
    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email).then(() => {
            setCopyMessage('Copied!');
            setTimeout(() => setCopyMessage(''), 2000);
        }).catch(err => {
            console.error('Failed to copy:', err);
        });
    };

    return (
        <div className="contact-content">
            {/* <p>Email me: <a href={`mailto:${email}`}>
                {email} <img src={boxArrowIcon} alt="" className="link-icon" />
            </a>
                <button onClick={handleCopyEmail} className="copy-button" title="Copy email">
                    <img src={copyIcon} alt="Copy" className="copy-icon" />
                </button>
                {copyMessage && <span className="copy-message">{copyMessage}</span>}
            </p> */}
            <p>LinkedIn: <a href="https://www.linkedin.com/in/lucas-aurelio-n" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/lucas-aurelio-n <img src={boxArrowIcon} alt="" className="link-icon" />
            </a></p>
            <p>GitHub: <a href="https://github.com/Lucas11011" target="_blank" rel="noopener noreferrer">
                github.com/Lucas11011 <img src={boxArrowIcon} alt="" className="link-icon" />
            </a></p>
            <p><a href={resume} download="LucasAurelio_Resume.pdf">
                Download Resume <img src={downloadIcon} alt="" className="link-icon" />
            </a></p>
        </div>
    );
}

export default Contact;
