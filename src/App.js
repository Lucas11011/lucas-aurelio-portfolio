import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import ScrollReveal from 'scrollreveal';
import ProfilePicture from './imgs/pfp.png';
import sunIcon from './icons/brightness-high.svg';
import moonIcon from './icons/moon-stars-fill.svg';

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

function App() {
  // Tab navigation state for top and bottom sections
  const [activeTopTab, setActiveTopTab] = useState('Home');
  const [activeBottomTab, setActiveBottomTab] = useState('Experience');
  // Dark mode toggle state
  const [isDarkMode, setIsDarkMode] = useState(false);

  const topTabsRef = useRef({});
  const bottomTabsRef = useRef({});
  const profilePictureRef = useRef(null);
  // Store underline position and width for animated tab indicators
  const [topUnderlineStyle, setTopUnderlineStyle] = useState({});
  const [bottomUnderlineStyle, setBottomUnderlineStyle] = useState({});

  // Update top tab underline position on active tab change
  useEffect(() => {
    const activeTopButton = topTabsRef.current[activeTopTab];
    if (activeTopButton) {
      setTopUnderlineStyle({
        width: activeTopButton.offsetWidth + 'px',
        left: activeTopButton.offsetLeft + 'px'
      });
    }
  }, [activeTopTab]);

  // Update bottom tab underline position on active tab change
  useEffect(() => {
    const activeBottomButton = bottomTabsRef.current[activeBottomTab];
    if (activeBottomButton) {
      setBottomUnderlineStyle({
        width: activeBottomButton.offsetWidth + 'px',
        left: activeBottomButton.offsetLeft + 'px'
      });
    }
  }, [activeBottomTab]);

  // Initialize VanillaTilt 3D effect on profile picture
  useEffect(() => {
    if (profilePictureRef.current && window.VanillaTilt) {
      window.VanillaTilt.init(profilePictureRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.2,
      });
    }
    return () => {
      const element = profilePictureRef.current;
      if (element && element.vanillaTilt) {
        element.vanillaTilt.destroy();
      }
    };
  }, []);

  // Toggle dark mode class on body element
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

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

  // Render top section content based on active tab
  const renderTopContent = () => {
    switch (activeTopTab) {
      case 'Home':
        return <Home />;
      case 'Skills':
        return <Skills />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  // Render bottom section content based on active tab
  const renderBottomContent = () => {
    switch (activeBottomTab) {
      case 'Experience':
        return <Experience />;
      case 'Projects':
        return <Projects />;
      case 'UX':
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
        <nav className="top-tabs">
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
        <nav className="bottom-tabs">
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
            ref={(el) => (bottomTabsRef.current['UX'] = el)}
            className={activeBottomTab === 'UX' ? 'active' : ''}
            onClick={() => setActiveBottomTab('UX')}
          >
            UX
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

      <Footer />
    </div>
  );
}

export default App;