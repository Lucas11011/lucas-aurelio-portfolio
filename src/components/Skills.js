// Skills.js
// import React from 'react';
import '../css/Skills.css';

// Import icons
import jsIcon from '../icons/JavaScript.svg';
import tsIcon from '../icons/TypeScript.svg';
import cppIcon from '../icons/C++.svg';
import cIcon from '../icons/C.svg';
import pythonIcon from '../icons/Python.svg';
import javaIcon from '../icons/Java.svg';
import htmlIcon from '../icons/HTML5.svg';
import cssIcon from '../icons/CSS3.svg';
import reactIcon from '../icons/React.svg';
import bootstrapIcon from '../icons/Bootstrap.svg';
import tailwindIcon from '../icons/Tailwind CSS.svg';
// import vscodeIcon from '../icons/Visual Studio Code (VS Code).svg';
// import filezillaIcon from '../icons/FileZilla.svg';
import figmaIcon from '../icons/Figma.svg';
import gitIcon from '../icons/Git.svg';
import githubIcon from '../icons/GitHub.svg';
import vercelIcon from '../icons/Vercel.svg';


function Skills() {
    return (
        <div className="skills-content">
            <div className="skills-category">
                <h3 className="category-label">Programming:</h3>
                <div className="skills-badges">
                    <span className="skill-badge javascript">
                        <img src={jsIcon} alt="JavaScript" className="skill-icon" />
                        <span className="skill-name">JavaScript</span>
                    </span>
                    <span className="skill-badge typescript">
                        <img src={tsIcon} alt="TypeScript" className="skill-icon" />
                        <span className="skill-name">TypeScript</span>
                    </span>
                    <span className="skill-badge cpp">
                        <img src={cppIcon} alt="C++" className="skill-icon" />
                        <span className="skill-name">C++</span>
                    </span>
                    <span className="skill-badge c">
                        <img src={cIcon} alt="C" className="skill-icon" />
                        <span className="skill-name">C</span>
                    </span>
                    <span className="skill-badge python">
                        <img src={pythonIcon} alt="Python" className="skill-icon" />
                        <span className="skill-name">Python</span>
                    </span>
                    <span className="skill-badge java">
                        <img src={javaIcon} alt="Java" className="skill-icon" />
                        <span className="skill-name">Java</span>
                    </span>
                </div>
            </div>

            <div className="skills-category">
                <h3 className="category-label">Web:</h3>
                <div className="skills-badges">
                    <span className="skill-badge html">
                        <img src={htmlIcon} alt="HTML5" className="skill-icon" />
                        <span className="skill-name">HTML5</span>
                    </span>
                    <span className="skill-badge css">
                        <img src={cssIcon} alt="CSS3" className="skill-icon" />
                        <span className="skill-name">CSS3</span>
                    </span>
                </div>
            </div>

            <div className="skills-category">
                <h3 className="category-label">Frameworks:</h3>
                <div className="skills-badges">
                    <span className="skill-badge react">
                        <img src={reactIcon} alt="React" className="skill-icon" />
                        <span className="skill-name">React</span>
                    </span>
                    <span className="skill-badge bootstrap">
                        <img src={bootstrapIcon} alt="Bootstrap" className="skill-icon" />
                        <span className="skill-name">Bootstrap</span>
                    </span>
                    <span className="skill-badge tailwind">
                        <img src={tailwindIcon} alt="Tailwind CSS" className="skill-icon" />
                        <span className="skill-name">Tailwind CSS</span>
                    </span>
                </div>
            </div>

            <div className="skills-category">
                <h3 className="category-label">Tech:</h3>
                <div className="skills-badges">
                    <span className="skill-badge figma">
                        <img src={figmaIcon} alt="Figma" className="skill-icon" />
                        <span className="skill-name">Figma</span>
                    </span>
                    <span className="skill-badge git">
                        <img src={gitIcon} alt="Git" className="skill-icon" />
                        <span className="skill-name">Git</span>
                    </span>
                    <span className="skill-badge github">
                        <img src={githubIcon} alt="GitHub" className="skill-icon dark-mode-white" />
                        <span className="skill-name">GitHub</span>
                    </span>
                    <span className="skill-badge vercel">
                        <img src={vercelIcon} alt="Vercel" className="skill-icon" />
                        <span className="skill-name">Vercel</span>
                    </span>
                    {/* <span className="skill-badge vscode">
                        <img src={vscodeIcon} alt="VS Code" className="skill-icon" />
                        <span className="skill-name">VS Code</span>
                    </span> */}
                    {/* <span className="skill-badge filezilla">
                        <img src={filezillaIcon} alt="FileZilla" className="skill-icon" />
                        <span className="skill-name">FileZilla</span>
                    </span> */}
                </div>
            </div>
        </div>
    );
}

export default Skills;