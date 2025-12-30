// UX.js
import React from 'react';
import '../css/UX.css';
import studySpaceFigma from '../imgs/study-space-figma.png';
import videographerFigma from '../imgs/videographer-figma.png';
import boxArrowIcon from '../icons/box-arrow-up-left.svg';
import figmaIcon from '../icons/Figma.svg';

function UX() {
    // UX design projects array with Figma links and descriptions
    const uxProjects = [
        {
            id: 1,
            thumbnail: studySpaceFigma,
            title: 'Study Space',
            description: 'Designed a low-distraction productivity workspace for students. I led the task management UX, iterating through user testing to improve clarity, reduce friction, and support real-time interactions in a React-based interface.',
            link: 'https://www.figma.com/design/IONEPSWcrSYTdormUDJeLd/study-space-work?node-id=0-1&t=X9NWpAEGb7iisrre-1',
            tools: [
                { icon: figmaIcon, name: 'Figma' }
            ]
        },
        {
            id: 2,
            thumbnail: videographerFigma,
            title: 'Videographer Portfolio',
            description: 'Portfolio designs for a freelance videographer. I explored multiple layouts to highlight visual storytelling and support client discovery. The UX prioritizes large media and intuitive navigation to reduce friction when browsing work.',
            link: 'https://www.figma.com/design/0TqoWy7E4Bnjcbqz6ahF3C/Jack-s-Portfolio?node-id=0-1&t=ue8r1kZri1HaJgF4-1',
            tools: [
                { icon: figmaIcon, name: 'Figma' }
            ]
        }
    ];

    return (
        <div className="ux-content">
            {/* List of UX design projects with thumbnails and details */}
            <div className="ux-list">
                {uxProjects.map((project) => (
                    <div key={project.id} className="ux-item">
                        <div className="ux-thumbnail-wrapper">
                            <div className="logo-wrapper">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="ux-thumbnail-link">
                                    <img
                                        src={project.thumbnail}
                                        alt={project.title}
                                        className="ux-thumbnail"
                                    />
                                    <img src={boxArrowIcon} alt="" className="ux-thumbnail-hover-icon" />
                                </a>
                                <div className="ux-details">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="ux-link">
                                        View the design
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="ux-description">
                            <h3 className="ux-title">{project.title}</h3>
                            <p className="ux-text">{project.description}</p>
                            <div className="tools-row">
                                {project.tools.map((tool, index) => (
                                    <img
                                        key={index}
                                        src={tool.icon}
                                        alt={tool.name}
                                        title={tool.name}
                                        className="tool-icon"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* <p className="coming-soon">more coming soon...</p> */}
        </div>
    );
}

export default UX;