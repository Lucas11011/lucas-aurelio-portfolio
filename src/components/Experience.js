import { useState, useRef } from 'react';
import '../css/Experience.css';
import sciquelLogo from '../imgs/sciquel_logo.jpg';
import jackPortfolioLogo from '../imgs/JackPortfolio.png';
import leftArrow from '../icons/arrow-right-circle-fill.svg';
import rightArrow from '../icons/arrow-right-circle-fill.svg';
import boxArrowIcon from '../icons/box-arrow-up-left.svg';
import tsIcon from '../icons/TypeScript.svg';
import tailwindIcon from '../icons/Tailwind CSS.svg';
import figmaIcon from '../icons/Figma.svg';
import reactIcon from '../icons/React.svg';
// import jsIcon from '../icons/JavaScript.svg';
import htmlIcon from '../icons/HTML5.svg';
import cssIcon from '../icons/CSS3.svg';
import githubIcon from '../icons/GitHub.svg';
import vercelIcon from '../icons/Vercel.svg';

const SLIDE_DURATION = 320;

function Experience() {
    // Experience data array with company info, descriptions, and tech stack
    const experiences = [
        {
            id: 1,
            logo: sciquelLogo,
            company: 'SciQuel',
            siteUrl: 'https://sciquel.org',
            title: 'Web Developer Intern',
            subtitle: 'SciQuel | November 2025 – Present',
            text: 'Contributed to frontend development for a science media organization, building responsive and accessible React components from Figma designs using TypeScript and CSS. Collaborated closely with designers and engineers to maintain visual consistency across the site and iterated on features through code reviews and GitHub-based workflows within an agile team.',
            techStack: [
                { icon: reactIcon, name: 'React' },
                { icon: tsIcon, name: 'TypeScript' },
                { icon: tailwindIcon, name: 'Tailwind CSS' },
                { icon: figmaIcon, name: 'Figma' },
                // { icon: jsIcon, name: 'JavaScript' },
                // { icon: htmlIcon, name: 'HTML5' },
                // { icon: cssIcon, name: 'CSS3' },
                { icon: githubIcon, name: 'GitHub' }
            ]
        },
        {
            id: 2,
            logo: jackPortfolioLogo,
            company: 'Freelance',
            siteUrl: 'https://jackgiancotti.com',
            title: 'Freelance Frontend Developer',
            subtitle: 'Summer 2025',
            text: 'Designed and developed a responsive portfolio website for a videographer client by translating Figma designs into a React application deployed on Vercel. Focused on visual hierarchy, usability, and polished interactions, including an interactive sidebar for navigation across video and photography projects.',
            techStack: [
                { icon: reactIcon, name: 'React' },
                { icon: figmaIcon, name: 'Figma' },
                // { icon: jsIcon, name: 'JavaScript' },
                { icon: htmlIcon, name: 'HTML5' },
                { icon: cssIcon, name: 'CSS3' },
                { icon: vercelIcon, name: 'Vercel' }
            ]
        }
    ];

    // Carousel state: current experience index and slide animation direction
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
            ? (currentIndex === experiences.length - 1 ? 0 : currentIndex + 1)
            : (currentIndex === 0 ? experiences.length - 1 : currentIndex - 1);

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

    // Navigate to previous experience with slide right animation
    const handlePrevious = () => {
        startSlideTransition('previous');
    };

    // Navigate to next experience with slide left animation
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

    const currentExperience = experiences[currentIndex];

    return (
        <div className="experience-content" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <button className="arrow-button left" onClick={handlePrevious} aria-label="Previous experience" disabled={isAnimating}>
                <img src={leftArrow} alt="Previous" className="arrow-icon left-arrow" />
            </button>

            <div className={`experience-main ${animationClass}`} aria-live="polite">
                <div className="experience-header">
                    <div className="company-info">
                        <a href={currentExperience.siteUrl} target="_blank" rel="noopener noreferrer" className="logo-link">
                            <img
                                src={currentExperience.logo}
                                alt={currentExperience.company}
                                className={`company-logo`}
                            />
                            <img src={boxArrowIcon} alt="" className="logo-hover-icon" />
                        </a>
                        <div className="company-details">
                            <a href={currentExperience.siteUrl} target="_blank" rel="noopener noreferrer" className="company-link">
                                Visit the site
                            </a>
                        </div>
                    </div>
                    <div className="experience-description">
                        <p className="experience-title">{currentExperience.title}</p>
                        <p className="experience-subtitle">{currentExperience.subtitle}</p>
                        <p className="experience-text">{currentExperience.text}</p>
                        <div className="tech-stack-row">
                            {currentExperience.techStack.map((tech, index) => (
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

            <button className="arrow-button right" onClick={handleNext} aria-label="Next experience" disabled={isAnimating}>
                <img src={rightArrow} alt="Next" className="arrow-icon right-arrow" />
            </button>

            {/* Pagination dots for experience navigation */}
            <div className="pagination-dots">
                {experiences.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to experience ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Experience;