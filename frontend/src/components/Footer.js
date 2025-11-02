import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { apiService } from '../services/api';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    // Trim email
    const trimmedEmail = newsletterEmail.trim();
    
    if (!trimmedEmail) {
      toast.error('कृपया अपना email address दर्ज करें');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      toast.error('कृपया एक valid email address दर्ज करें');
      return;
    }

    setIsSubmitting(true);
    try {
      await apiService.newsletter.subscribe(trimmedEmail);
      toast.success('Newsletter में सफलतापूर्वक subscribe हो गए! धन्यवाद।');
      setNewsletterEmail('');
    } catch (error) {
      // Handle network errors gracefully
      if (error.response) {
        // Server responded with error
        const errorMessage = error.response.data?.message || 'Subscribe करने में समस्या आई। कृपया पुनः प्रयास करें।';
        if (error.response.data?.message === 'Email already subscribed') {
          toast.error('यह email पहले से ही subscribe है');
        } else {
          toast.error(errorMessage);
        }
      } else if (error.request) {
        // Request was made but no response (network error)
        toast.error('Network error. कृपया अपना internet connection जांचें और पुनः प्रयास करें।');
      } else {
        // Something else happened
        toast.error('एक unexpected error आया है। कृपया पुनः प्रयास करें।');
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
                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="footer-title">Quick Links</h6>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/faculty">Faculty</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-heading">Resources</h5>
            <ul className="footer-links">
              <li><Link to="/#facilities"><i className="fas fa-building me-2"></i>Facilities</Link></li>
              <li><Link to="/faculty"><i className="fas fa-chalkboard-user me-2"></i>Faculty</Link></li>
              <li><Link to="/gallery"><i className="fas fa-images me-2"></i>Gallery</Link></li>
              <li><Link to="/disclosure"><i className="fas fa-clipboard-list me-2"></i>Disclosure</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="footer-title">Contact Info</h6>
            <div className="footer-contact">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <p className="label">Address</p>
                  <p>Jiyalal Roy Chowk, Shekhpur, Ahiyapur, Akharaghat, Muzaffarpur, Bihar</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <p className="label">Phone</p>
                  <p>+91 9430810464<br/>+91 9798209332</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
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
                placeholder="आपका email address" 
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

        <div className="row">
          <div className="col-md-6">
            <p className="footer-copyright">
              &copy; {currentYear} Children's Paradise Public School. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-end">
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
