import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import ScrollReveal from 'scrollreveal';
import ProfilePicture from './imgs/lower poly avatar.png';
import sunIcon from './icons/brightness-high.svg';
import moonIcon from './icons/moon-stars-fill.svg';
import downloadIcon from './icons/download.svg';
import resume from './resume/Lucas_Aurelio_Resume.pdf';

import { Analytics } from '@vercel/analytics/react';

// Import tab content components
import Home from './components/Home';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Projects from './components/Projects';
import UX from './components/UX';
import Certifications from './components/Certifications';

// Import shared components
import Footer from './components/Footer';

function getUnderlineStyle(navElement, activeButton) {
  if (!navElement || !activeButton) {
    return {};
  }

  const navRect = navElement.getBoundingClientRect();
  const buttonRect = activeButton.getBoundingClientRect();

  return {
    width: `${buttonRect.width}px`,
    left: `${buttonRect.left - navRect.left}px`
  };
}

function App() {
  // Tab navigation state for top and bottom sections
  const [activeTopTab, setActiveTopTab] = useState('Home');
  const [activeBottomTab, setActiveBottomTab] = useState('Experience');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  // Dark mode toggle state (persisted)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      return localStorage.getItem('theme') === 'dark';
    } catch {
      return false;
    }
  });

  const topTabsRef = useRef({});
  const bottomTabsRef = useRef({});
  const topTabsNavRef = useRef(null);
  const bottomTabsNavRef = useRef(null);
  const profilePictureRef = useRef(null);
  // Store underline position and width for animated tab indicators
  const [topUnderlineStyle, setTopUnderlineStyle] = useState({});
  const [bottomUnderlineStyle, setBottomUnderlineStyle] = useState({});

  useEffect(() => {
    const updateUnderlines = () => {
      setTopUnderlineStyle(
        getUnderlineStyle(topTabsNavRef.current, topTabsRef.current[activeTopTab])
      );
      setBottomUnderlineStyle(
        getUnderlineStyle(bottomTabsNavRef.current, bottomTabsRef.current[activeBottomTab])
      );
    };

    updateUnderlines();

    const animationFrameId = window.requestAnimationFrame(updateUnderlines);
    window.addEventListener('resize', updateUnderlines);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', updateUnderlines);
    };
  }, [activeTopTab, activeBottomTab]);

  // Initialize VanillaTilt 3D effect on profile picture
  useEffect(() => {
    const element = profilePictureRef.current;
    if (element && window.VanillaTilt) {
      window.VanillaTilt.init(element, {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.2,
      });
    }
    return () => {
      if (element && element.vanillaTilt) {
        element.vanillaTilt.destroy();
      }
    };
  }, []);

  // Toggle dark mode class on body and html elements
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      root.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      root.classList.remove('dark-mode');
    }
    try {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    } catch {
      // Ignore write errors (e.g., private mode)
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (!isResumeOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsResumeOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isResumeOpen]);

  // Scroll reveal animations for top and bottom sections (run once)
  useEffect(() => {
    ScrollReveal().reveal('.header', {
      origin: 'bottom',
      // distance: '30px',
      duration: 800,
      delay: 100,
      easing: 'ease-in-out',
      reset: false
    });

    ScrollReveal().reveal('.top-section', {
      origin: 'bottom',
      distance: '10px',
      duration: 800,
      delay: 100,
      easing: 'ease-in-out',
      reset: false
    });


    ScrollReveal().reveal('.bottom-tabs', {
      origin: 'bottom',
      distance: '20px',
      duration: 800,
      delay: 100,
      easing: 'ease-in-out',
      reset: false
    });

    ScrollReveal().reveal('.bottom-content', {
      origin: 'bottom',
      distance: '20px',
      duration: 800,
      delay: 200,
      easing: 'ease-in-out',
      reset: false
    });
  }, []);

  // Toggle html class when scrolled to bottom for overscroll color
  useEffect(() => {
    const root = document.documentElement;

    const updateAtBottom = () => {
      const scrollTop = window.scrollY || root.scrollTop;
      const viewportHeight = window.innerHeight || root.clientHeight;
      const docHeight = root.scrollHeight;
      const atBottom = scrollTop + viewportHeight >= docHeight - 2;

      if (atBottom) {
        root.classList.add('at-bottom');
      } else {
        root.classList.remove('at-bottom');
      }
    };

    updateAtBottom();
    window.addEventListener('scroll', updateAtBottom, { passive: true });
    window.addEventListener('resize', updateAtBottom);

    return () => {
      window.removeEventListener('scroll', updateAtBottom);
      window.removeEventListener('resize', updateAtBottom);
    };
  }, []);

  // Render top section content based on active tab
  const renderTopContent = () => {
    switch (activeTopTab) {
      case 'Home':
        return <Home onViewResume={() => setIsResumeOpen(true)} />;
      case 'Skills':
        return <Skills />;
      case 'Contact':
        return <Contact onViewResume={() => setIsResumeOpen(true)} />;
      default:
        return <Home onViewResume={() => setIsResumeOpen(true)} />;
    }
  };

  // Render bottom section content based on active tab
  const renderBottomContent = () => {
    switch (activeBottomTab) {
      case 'Experience':
        return <Experience />;
      case 'Projects':
        return <Projects />;
      case 'UX Design':
        return <UX />;
      case 'Certifications':
        return <Certifications />;
      default:
        return <Experience />;
    }
  };

  return (
    <div className="App">
      <header className="header">
        <div className="domain">LucasAurelio.com</div>
        <div className="mobile-profile">
          <img ref={profilePictureRef} src={ProfilePicture} alt="Profile" className="profile-picture" />
        </div>
        <nav ref={topTabsNavRef} className="top-tabs">
          <button
            ref={(el) => (topTabsRef.current['Home'] = el)}
            className={activeTopTab === 'Home' ? 'active' : ''}
            onClick={() => setActiveTopTab('Home')}
          >
            Home
          </button>
          <button
            ref={(el) => (topTabsRef.current['Skills'] = el)}
            className={activeTopTab === 'Skills' ? 'active' : ''}
            onClick={() => setActiveTopTab('Skills')}
          >
            Skills
          </button>
          <button
            ref={(el) => (topTabsRef.current['Contact'] = el)}
            className={activeTopTab === 'Contact' ? 'active' : ''}
            onClick={() => setActiveTopTab('Contact')}
          >
            Contact
          </button>
          <div className="tab-underline" style={topUnderlineStyle}></div>
        </nav>
        <button
          className="theme-switcher"
          onClick={() => setIsDarkMode(!isDarkMode)}
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <img
            src={isDarkMode ? moonIcon : sunIcon}
            alt={isDarkMode ? 'Dark mode' : 'Light mode'}
            className="theme-icon"
          />
        </button>
      </header>

      <main className="top-section">
        <div className="left-content">
          <div key={activeTopTab} className="top-content-fade">
            {renderTopContent()}
          </div>
        </div>
        <div className="right-profile">
          <img ref={profilePictureRef} src={ProfilePicture} alt="Profile" className="profile-picture" />
        </div>
      </main>

      <section className="bottom-section">
        <nav ref={bottomTabsNavRef} className="bottom-tabs">
          <button
            ref={(el) => (bottomTabsRef.current['Experience'] = el)}
            className={activeBottomTab === 'Experience' ? 'active' : ''}
            onClick={() => setActiveBottomTab('Experience')}
          >
            Experience
          </button>
          <button
            ref={(el) => (bottomTabsRef.current['Projects'] = el)}
            className={activeBottomTab === 'Projects' ? 'active' : ''}
            onClick={() => setActiveBottomTab('Projects')}
          >
            Projects
          </button>
          <button
            ref={(el) => (bottomTabsRef.current['UX Design'] = el)}
            className={activeBottomTab === 'UX Design' ? 'active' : ''}
            onClick={() => setActiveBottomTab('UX Design')}
          >
            UX Design
          </button>
          <button
            ref={(el) => (bottomTabsRef.current['Certifications'] = el)}
            className={activeBottomTab === 'Certifications' ? 'active' : ''}
            onClick={() => setActiveBottomTab('Certifications')}
          >
            Certifications
          </button>
          <div className="tab-underline" style={bottomUnderlineStyle}></div>
        </nav>
        <div className="bottom-content">{renderBottomContent()}</div>
      </section>

      {isResumeOpen && (
        <div
          className="resume-modal-backdrop"
          role="presentation"
          onClick={() => setIsResumeOpen(false)}
        >
          <div
            className="resume-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Resume viewer"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="resume-modal-close"
              aria-label="Close resume viewer"
              onClick={() => setIsResumeOpen(false)}
            >
              ×
            </button>
            <div className="resume-modal-toolbar">
              <div>
                <p className="resume-modal-eyebrow">Resume</p>
                <h2 className="resume-modal-title">Lucas Aurelio</h2>
              </div>
              <a
                href={resume}
                download="Lucas_Aurelio_Resume_Software_Engineer.pdf"
                className="resume-download-link"
              >
                <img src={downloadIcon} alt="" className="resume-download-icon" />
                <span>Download PDF</span>
              </a>
            </div>
            <div className="resume-modal-frame">
              <iframe
                src={`${resume}#toolbar=1&navpanes=0&view=FitH`}
                title="Lucas Aurelio resume"
                className="resume-iframe"
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
      <Analytics />
    </div>
  );
}

export default App;