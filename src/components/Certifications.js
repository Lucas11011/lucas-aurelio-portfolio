// Certifications.js
import React from 'react';
import '../css/Certifications.css';
import metaLogo from '../imgs/metalogo.jpg';
import reactIcon from '../icons/React.svg';
import jsIcon from '../icons/JavaScript.svg';
import htmlIcon from '../icons/HTML5.svg';
import cssIcon from '../icons/CSS3.svg';
import figmaIcon from '../icons/Figma.svg';
import gitIcon from '../icons/Git.svg';
import githubIcon from '../icons/GitHub.svg';
import boxArrowIcon from '../icons/box-arrow-up-left.svg';

function Certifications() {
    // Certifications data array with details, links, and tech skills
    const certifications = [
        {
            id: 1,
            logo: metaLogo,
            title: 'Meta Frontend Developer Professional Certificate',
            description: 'Developed practical front-end web development skills in HTML, CSS, and JavaScript to build responsive, interactive websites, and learned to use modern tools and frameworks like React, Bootstrap, Git/GitHub, and Figma for design, version control, and UI/UX workflows. Applied learnings through projects that helped solidify real-world coding abilities and build a portfolio demonstrating readiness for front-end developer roles.',
            link: 'https://www.coursera.org/professional-certificates/meta-front-end-developer/paidmedia?utm_medium=sem&utm_source=gg&utm_campaign=b2c_namer_high-ltv_meta_ftcof_professional-certificates_px_dr_bau_gg_sem_pr-bd_us-ca_en_m_hyb_25-09_developer&campaignid=23005687385&adgroupid=186568886552&device=c&keyword=&matchtype=&network=g&devicemodel=&creativeid=775977448762&assetgroupid=&targetid=dsa-2382539641348&extensionid=&placement=&gad_source=1&gad_campaignid=23005687385&gbraid=0AAAAADdKX6Yw37rETDfgdwz2-fpBcd7DG&gclid=Cj0KCQiAgbnKBhDgARIsAGCDdlfSP-yGE2fMduwjKgV6Hxs957bZCB0JdtrXAE-djIPuljaVWko2HrkaAlhnEALw_wcB',
            techStack: [
                { icon: reactIcon, name: 'React' },
                { icon: jsIcon, name: 'JavaScript' },
                { icon: htmlIcon, name: 'HTML5' },
                { icon: cssIcon, name: 'CSS3' },
                { icon: figmaIcon, name: 'Figma' },
                { icon: gitIcon, name: 'Git' },
                { icon: githubIcon, name: 'GitHub' }
            ]
        }
    ];

    return (
        <div className="certifications-content">
            {/* List of certifications with logos and descriptions */}
            <div className="certifications-list">
                {certifications.map((cert) => (
                    <div key={cert.id} className="certification-item">
                        <div className="certification-logo">
                            <div className="logo-wrapper">
                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-logo-link">
                                    <img
                                        src={cert.logo}
                                        alt={cert.title}
                                        className="cert-logo"
                                    />
                                    <img src={boxArrowIcon} alt="" className="cert-logo-hover-icon" />
                                </a>
                                <div className="cert-details">
                                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                                        Visit Certification
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="certification-details">
                            <h3 className="certification-title">{cert.title}</h3>
                            <p className="certification-description">{cert.description}</p>
                            <div className="tech-stack-row">
                                {cert.techStack.map((tech, index) => (
                                    <img
                                        key={index}
                                        src={tech.icon}
                                        alt={tech.name}
                                        title={tech.name}
                                        className={`tech-icon ${tech.name === 'GitHub' ? 'dark-mode-white' : ''}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <p className="coming-soon">more coming soon...</p>
        </div>
    );
}

export default Certifications;
