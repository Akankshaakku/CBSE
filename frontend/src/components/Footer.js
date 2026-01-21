import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { apiService } from '../services/api';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    // Trim email
    const trimmedEmail = newsletterEmail.trim();

    if (!trimmedEmail) {
      toast.error('Please enter your email address');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    try {
      await apiService.newsletter.subscribe(trimmedEmail);
      toast.success('Successfully subscribed to newsletter! Thank you.');
      setNewsletterEmail('');
    } catch (error) {
      // Handle network errors gracefully
      if (error.response) {
        // Server responded with error
        const errorMessage = error.response.data?.message || 'Failed to subscribe. Please try again.';
        if (error.response.data?.message === 'Email already subscribed') {
          toast.error('This email is already subscribed');
        } else {
          toast.error(errorMessage);
        }
      } else if (error.request) {
        // Request was made but no response (network error)
        toast.error('Network error. Please check your internet connection and try again.');
      } else {
        // Something else happened
        toast.error('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="footer-new">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-brand">
              <h5>📚 CPPS</h5>
              <p className="footer-description">
                Children's Paradise Public School is an institution committed to providing quality education with modern facilities and experienced faculty.
              </p>
              <div className="social-links">
                <a
                  href="https://www.facebook.com/share/1BcFJAgRj5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon social-icon-facebook"
                  aria-label="Visit our Facebook page"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/childrensparadisepublicschool?igsh=enNva3U2c2c0dXll"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon social-icon-instagram"
                  aria-label="Follow us on Instagram"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/children-s-paradise-public-school-muzaffarpur-a72128344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon social-icon-linkedin"
                  aria-label="Connect with us on LinkedIn"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/cppschoolmuz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon social-icon-twitter"
                  aria-label="Follow us on Twitter/X"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="footer-title">Quick Links</h6>
            <ul className="footer-links">
              <li><Link to="/"><i className="fas fa-home me-2"></i>Home</Link></li>
              <li><Link to="/about"><i className="fas fa-info-circle me-2"></i>About Us</Link></li>
              <li><Link to="/faculty"><i className="fas fa-chalkboard-user me-2"></i>Faculty</Link></li>
              <li><Link to="/gallery"><i className="fas fa-images me-2"></i>Gallery</Link></li>
              <li><Link to="/blog"><i className="fas fa-blog me-2"></i>Blog</Link></li>
              <li><Link to="/contact"><i className="fas fa-envelope me-2"></i>Contact</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-heading">Resources</h5>
            <ul className="footer-links">
              <li><Link to="/#facilities"><i className="fas fa-building me-2"></i>Facilities</Link></li>
              <li><Link to="/disclosure"><i className="fas fa-clipboard-list me-2"></i>Mandatory Public Discloser</Link></li>
              <li><Link to="/#facilities"><i className="fas fa-flask me-2"></i>Labs & Equipment</Link></li>
              <li><Link to="/about"><i className="fas fa-history me-2"></i>School History</Link></li>
              <li><Link to="/faculty"><i className="fas fa-users me-2"></i>Meet Our Team</Link></li>
              <li><Link to="/contact"><i className="fas fa-map-marker-alt me-2"></i>Visit Us</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mb-4 contact-info-section">
            <h6 className="footer-title">Contact Info</h6>
            <div className="footer-contact">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div className="contact-info-text">
                  <p className="label">Address</p>
                  <p>Jiyalal Roy Chowk, Shekhpur, Ahiyapur, Muzaffarpur, Bihar</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div className="contact-info-text">
                  <p className="label">Phone</p>
                  <p>+91 9430810464<br />+91 9798209332</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div className="contact-info-text">
                  <p className="label">Email</p>
                  <p>cppschoolmuz@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="footer-title">Newsletter</h6>
            <p className="footer-description">Subscribe to get updates about school events and news.</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit} noValidate>
              <input
                type="email"
                placeholder="Your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                disabled={isSubmitting}
                aria-label="Newsletter email input"
                aria-describedby="newsletter-description"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                aria-label="Subscribe to newsletter"
                title={isSubmitting ? 'Submitting...' : 'Subscribe'}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin me-2"></i>
                    Submitting...
                  </>
                ) : (
                  <>Submit</>
                )}
              </button>
            </form>
            <p id="newsletter-description" className="sr-only">Enter your email to subscribe to our newsletter</p>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="row align-items-center">
          <div className="col-md-6 col-12 mb-3 mb-md-0">
            <p className="footer-copyright">
              &copy; {currentYear} Children's Paradise Public School. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 col-12">
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <span>|</span>
              <a href="#">Terms &amp; Conditions</a>
              <span>|</span>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: '15px' }}>
          <div className="col-12 text-center">
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <span>|</span>
              <a href="#">Terms & Conditions</a>
              <span>|</span>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
