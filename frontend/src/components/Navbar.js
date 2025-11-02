import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFacilitiesOpen, setIsFacilitiesOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const menuRef = useRef(null);
  const togglerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        togglerRef.current &&
        !togglerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
        setIsFacilitiesOpen(false);
        setIsBlogOpen(false);
      }
    };

    // Close menu on escape key
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        setIsFacilitiesOpen(false);
        setIsBlogOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    const newState = !isMenuOpen;
    console.log('Toggle menu - Current:', isMenuOpen, 'New:', newState);
    setIsMenuOpen(newState);
    // Close dropdowns when closing menu
    if (!newState) {
      setIsFacilitiesOpen(false);
      setIsBlogOpen(false);
    }
  };

  const toggleFacilities = () => {
    setIsFacilitiesOpen(!isFacilitiesOpen);
  };

  const facilitiesList = [
    { name: 'All Facilities', path: '/#facilities', icon: 'fa-building' },
    { name: 'Computer Lab', path: '/#facilities', icon: 'fa-laptop' },
    { name: 'Library', path: '/#facilities', icon: 'fa-book' },
    { name: 'Science Labs', path: '/#facilities', icon: 'fa-flask' }
  ];

  return (
    <>
      <nav className={`navbar-new ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link className="navbar-brand-new" to="/">
          <img src="/image/logo.jpg" alt="CPPS Logo" className="navbar-logo" />
          <span className="brand-text">CPPS</span>
        </Link>

        <button
          ref={togglerRef}
          className="navbar-toggler-new"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
          }}
          onTouchStart={(e) => {
            e.stopPropagation();
          }}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div 
          ref={menuRef}
          className={`navbar-menu-new ${isMenuOpen ? 'show' : ''}`}
        >
          <ul className="navbar-nav-new">
            <li className="nav-item-new">
              <Link 
                className="nav-link-new" 
                to="/" 
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsFacilitiesOpen(false);
                  setIsBlogOpen(false);
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item-new">
              <Link 
                className="nav-link-new" 
                to="/about" 
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsFacilitiesOpen(false);
                  setIsBlogOpen(false);
                }}
              >
                About
              </Link>
            </li>
            <li className="nav-item-new">
              <Link 
                className="nav-link-new" 
                to="/gallery" 
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsFacilitiesOpen(false);
                  setIsBlogOpen(false);
                }}
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item-new">
              <Link 
                className="nav-link-new" 
                to="/faculty" 
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsFacilitiesOpen(false);
                  setIsBlogOpen(false);
                }}
              >
                Faculty
              </Link>
            </li>
            <li className="nav-item-new dropdown-new">
              <button
                className="nav-link-new dropdown-toggle-new"
                onClick={toggleFacilities}
              >
                <i className="fas fa-building me-2"></i>
                Facilities
                <i className={`fas fa-chevron-down ms-2 ${isFacilitiesOpen ? 'open' : ''}`}></i>
              </button>
              <div className={`dropdown-menu-new ${isFacilitiesOpen ? 'show' : ''}`}>
                {facilitiesList.map((facility, index) => (
                  <Link
                    key={index}
                    to={facility.path}
                    className="dropdown-item-new"
                    onClick={() => {
                      setIsFacilitiesOpen(false);
                      setIsMenuOpen(false);
                      // Scroll to facilities section if on home page
                      if (facility.path.includes('#facilities')) {
                        setTimeout(() => {
                          const element = document.getElementById('facilities');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 100);
                      }
                    }}
                  >
                    <i className={`fas ${facility.icon} me-2`}></i>
                    {facility.name}
                  </Link>
                ))}
              </div>
            </li>
            

            <li className="nav-item-new dropdown-new">
              <button
                className="nav-link-new dropdown-toggle-new"
                onClick={() => setIsBlogOpen(!isBlogOpen)}
              >
                <i className="fas fa-newspaper me-2"></i>
                Blog
                <i className={`fas fa-chevron-down ms-2 ${isBlogOpen ? 'open' : ''}`}></i>
              </button>
              <div className={`dropdown-menu-new ${isBlogOpen ? 'show' : ''}`}>
                <Link
                  to="/blog"
                  className="dropdown-item-new"
                  onClick={() => {
                    setIsBlogOpen(false);
                    setIsMenuOpen(false);
                  }}
                >
                  <i className="fas fa-list me-2"></i>
                  Blog List
                </Link>
              </div>
            </li>
            <li className="nav-item-new">
              <Link 
                className="nav-link-new" 
                to="/disclosure" 
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsFacilitiesOpen(false);
                  setIsBlogOpen(false);
                }}
              >
                Disclosure
              </Link>
            </li>
            <li className="nav-item-new">
              <Link 
                className="nav-link-new" 
                to="/contact" 
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsFacilitiesOpen(false);
                  setIsBlogOpen(false);
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="navbar-actions">
            <DarkModeToggle />
            <Link 
              to="/contact" 
              className="btn btn-primary-new btn-sm" 
              onClick={() => {
                setIsMenuOpen(false);
                setIsFacilitiesOpen(false);
                setIsBlogOpen(false);
              }}
            >
              Enquiry Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
