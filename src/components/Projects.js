import React, { useState, useRef } from 'react';
import '../css/Projects.css';
import cryptoTrackerThumbnail from '../imgs/crypto-tracker-thumbnail.png';
import studySpaceThumbnail from '../imgs/study-space-thumbnail.png';
import leftArrow from '../icons/arrow-right-circle-fill.svg';
import rightArrow from '../icons/arrow-right-circle-fill.svg';
import boxArrowIcon from '../icons/box-arrow-up-left.svg';
import reactIcon from '../icons/React.svg';
import viteIcon from '../icons/Vite.js.svg';
import cssIcon from '../icons/CSS3.svg';
import vercelIcon from '../icons/Vercel.svg';
import githubIcon from '../icons/GitHub.svg';
import figmaIcon from '../icons/Figma.svg';
import firebaseIcon from '../icons/Firebase.svg';

const SLIDE_DURATION = 320;

function Projects() {
    // Project data array with thumbnails, descriptions, and tech stack
    const projects = [
        {
            id: 1,
            thumbnail: cryptoTrackerThumbnail,
            title: 'Crypto Tracker Dashboard',
            description: 'A modern, responsive React application for tracking cryptocurrency prices and market data in real-time. Built with React Router for seamless navigation, powered by the CoinGecko API, and deployed on Vercel. Features include responsive design, dynamic charts, search functionality, grid/list view, and watchlist page.',
            link: 'https://crypto-tracker-dashboard-ivory.vercel.app/',
            techStack: [
                { icon: reactIcon, name: 'React' },
                { icon: viteIcon, name: 'Vite' },
                { icon: cssIcon, name: 'CSS' },
                { icon: vercelIcon, name: 'Vercel' },
                { icon: githubIcon, name: 'GitHub' }
            ]
        },
        {
            id: 2,
            thumbnail: studySpaceThumbnail,
            title: 'Study Space - Task List',
            description: 'Collaborated with a team of four to design and launch a productivity app. Led development of the task list feature with add, edit, and drag-and-drop functionality. Experienced full project lifecycle, proposal, prototyping, user testing, and deployment. supported presentations, code reviews, and UI  improvements.',
            link: 'https://gui-ii-studyspace.web.app/',
            techStack: [
                { icon: reactIcon, name: 'React' },
                { icon: cssIcon, name: 'CSS' },
                { icon: figmaIcon, name: 'Figma' },
                { icon: githubIcon, name: 'GitHub' },
                { icon: firebaseIcon, name: 'Firebase' }
            ]
        }
    ];

    // Carousel state: current project index and slide animation direction
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState('');
    const [isAnimating, setIsAnimating] = useState(false);
    // Touch tracking for swipe detection
    const touchStartX = useRef(0);

    const startSlideTransition = (direction) => {
        if (isAnimating) {
            return;
        }

        const exitClass = direction === 'next' ? 'slide-out-left' : 'slide-out-right';
        const enterClass = direction === 'next' ? 'slide-in-right' : 'slide-in-left';
        const targetIndex = direction === 'next'
            ? (currentIndex === projects.length - 1 ? 0 : currentIndex + 1)
            : (currentIndex === 0 ? projects.length - 1 : currentIndex - 1);

        setIsAnimating(true);
        setAnimationClass(exitClass);

        setTimeout(() => {
            setCurrentIndex(targetIndex);
            setAnimationClass(enterClass);

            setTimeout(() => {
                setAnimationClass('');
                setIsAnimating(false);
            }, SLIDE_DURATION);
        }, SLIDE_DURATION);
    };

    // Navigate to previous project with slide right animation
    const handlePrevious = () => {
        startSlideTransition('previous');
    };

    // Navigate to next project with slide left animation
    const handleNext = () => {
        startSlideTransition('next');
    };

    // Handle touch start for swipe detection
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    // Handle touch end and detect swipe direction
    const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX.current - touchEndX;
        const minSwipeDistance = 50; // minimum distance to register a swipe

        if (Math.abs(diff) > minSwipeDistance) {
            if (diff > 0) {
                // Swiped left, go to next
                handleNext();
            } else {
                // Swiped right, go to previous
                handlePrevious();
            }
        }
    };

    const currentProject = projects[currentIndex];

    return (
        <div className="projects-content" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <button className="arrow-button left" onClick={handlePrevious} aria-label="Previous project" disabled={isAnimating}>
                <img src={leftArrow} alt="Previous" className="arrow-icon left-arrow" />
            </button>

            <div className={`project-main ${animationClass}`} aria-live="polite">
                <div className="project-header">
                    <div className="project-info">
                        <a href={currentProject.link} target="_blank" rel="noopener noreferrer" className="project-link-wrapper">
                            <img
                                src={currentProject.thumbnail}
                                alt={currentProject.title}
                                className="project-thumbnail"
                            />
                            <img src={boxArrowIcon} alt="" className="project-hover-icon" />
                        </a>
                        <div className="project-details">
                            <a href={currentProject.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                Visit the project
                            </a>
                        </div>
                    </div>
                    <div className="project-description">
                        <h3 className="project-title">{currentProject.title}</h3>
                        <p className="project-text">{currentProject.description}</p>
                        <div className="tech-stack-row">
                            {currentProject.techStack.map((tech, index) => (
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
            </div>

            <button className="arrow-button right" onClick={handleNext} aria-label="Next project" disabled={isAnimating}>
                <img src={rightArrow} alt="Next" className="arrow-icon right-arrow" />
            </button>

            {/* Pagination dots for project navigation */}
            <div className="pagination-dots">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to project ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;