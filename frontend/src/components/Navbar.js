import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFacilitiesOpen, setIsFacilitiesOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          className="navbar-toggler-new"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-menu-new ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav-new">
            <li className="nav-item-new">
              <Link className="nav-link-new" to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="nav-item-new">
              <Link className="nav-link-new" to="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li className="nav-item-new">
              <Link className="nav-link-new" to="/gallery" onClick={() => setIsMenuOpen(false)}>
                Gallery
              </Link>
            </li>
            <li className="nav-item-new">
              <Link className="nav-link-new" to="/faculty" onClick={() => setIsMenuOpen(false)}>
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
              <Link className="nav-link-new" to="/disclosure" onClick={() => setIsMenuOpen(false)}>
                Disclosure
              </Link>
            </li>
            <li className="nav-item-new">
              <Link className="nav-link-new" to="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="navbar-actions">
            <DarkModeToggle />
            <Link to="/contact" className="btn btn-primary-new btn-sm" onClick={() => setIsMenuOpen(false)}>
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
