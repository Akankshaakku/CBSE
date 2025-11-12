import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { apiService } from '../services/api';

const Contact = () => {
  // Update document title and meta tags for SEO
  useEffect(() => {
    document.title = "Contact Us - CPPS | Children's Paradise Public School, Muzaffarpur";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact Children\'s Paradise Public School (CPPS) in Muzaffarpur, Bihar. Phone: +91 9430810464, +91 9798209332. Email: cppschoolmuz@gmail.com. Address: Jiyalal Roy Chowk, Shekhpur, Ahiyapur, Muzaffarpur, Bihar.');
    }
    
    // Add structured data for contact information
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Children's Paradise Public School",
      "alternateName": "CPPS",
      "url": window.location.origin,
      "logo": `${window.location.origin}/image/faviconLogo.png`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9430810464",
        "contactType": "Customer Service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jiyalal Roy Chowk, Shekhpur, Ahiyapur",
        "addressLocality": "Muzaffarpur",
        "addressRegion": "Bihar",
        "addressCountry": "IN"
      },
      "email": "cppschoolmuz@gmail.com",
      "telephone": "+91-9430810464"
    };
    
    // Remove existing structured data script if any
    const existingScript = document.getElementById('contact-structured-data');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Add new structured data
    const script = document.createElement('script');
    script.id = 'contact-structured-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    return () => {
      // Cleanup on unmount
      const scriptToRemove = document.getElementById('contact-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    try {
      await apiService.contact.submit(formData);
      toast.success('Your message has been sent successfully! We will contact you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data?.message || 'Failed to send message. Please try again.';
        toast.error(errorMessage);
      } else if (error.request) {
        toast.error('Network error. Please check your internet connection and try again.');
      } else {
        toast.error('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="contact-hero-content"
          >
            <h1>Contact Us</h1>
            <p>We'd Love to Hear From You</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Details Section - Prominent for SEO */}
      <section className="contact-details-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2 className="mb-3">Contact Information</h2>
            <p className="lead">Get in touch with Children's Paradise Public School</p>
          </motion.div>
          
          <div className="row g-4">
            <motion.div
              className="col-lg-3 col-md-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="contact-card h-100 text-center p-4" style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                <div className="contact-icon mb-3" style={{ fontSize: '2.5rem', color: '#1a4b84' }}>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h5 className="mb-3">Address</h5>
                <p className="mb-0" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <span itemProp="streetAddress">Jiyalal Roy Chowk, Shekhpur, Ahiyapur</span><br/>
                  <span itemProp="addressLocality">Muzaffarpur</span>, <span itemProp="addressRegion">Bihar</span><br/>
                  <span itemProp="addressCountry">India</span>
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="col-lg-3 col-md-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="contact-card h-100 text-center p-4" style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                <div className="contact-icon mb-3" style={{ fontSize: '2.5rem', color: '#1a4b84' }}>
                  <i className="fas fa-phone"></i>
                </div>
                <h5 className="mb-3">Phone Numbers</h5>
                <p className="mb-2">
                  <a href="tel:+919430810464" itemProp="telephone" style={{ color: '#1a4b84', textDecoration: 'none' }}>
                    <strong>+91 9430810464</strong>
                  </a>
                </p>
                <p className="mb-0">
                  <a href="tel:+919798209332" itemProp="telephone" style={{ color: '#1a4b84', textDecoration: 'none' }}>
                    <strong>+91 9798209332</strong>
                  </a>
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="col-lg-3 col-md-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="contact-card h-100 text-center p-4" style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                <div className="contact-icon mb-3" style={{ fontSize: '2.5rem', color: '#1a4b84' }}>
                  <i className="fas fa-envelope"></i>
                </div>
                <h5 className="mb-3">Email</h5>
                <p className="mb-0">
                  <a href="mailto:cppschoolmuz@gmail.com" itemProp="email" style={{ color: '#1a4b84', textDecoration: 'none', wordBreak: 'break-word' }}>
                    <strong>cppschoolmuz@gmail.com</strong>
                  </a>
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="col-lg-3 col-md-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="contact-card h-100 text-center p-4" style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                <div className="contact-icon mb-3" style={{ fontSize: '2.5rem', color: '#1a4b84' }}>
                  <i className="fas fa-clock"></i>
                </div>
                <h5 className="mb-3">Office Hours</h5>
                <p className="mb-0">
                  <strong>Monday - Friday</strong><br/>
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container py-5">
          <div className="row">
            <motion.div
              className="col-lg-6 mb-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="contact-info">
                <h4>Get in Touch</h4>
                <p className="mb-4">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                <div className="contact-item mb-3">
                  <i className="fas fa-map-marker-alt text-primary me-2"></i>
                  <div>
                    <strong>Address</strong>
                    <p>Jiyalal Roy Chowk, Shekhpur, Ahiyapur, Muzaffarpur, Bihar</p>
                  </div>
                </div>
                <div className="contact-item mb-3">
                  <i className="fas fa-phone text-primary me-2"></i>
                  <div>
                    <strong>Phone</strong>
                    <p>
                      <a href="tel:+919430810464" style={{ color: 'inherit', textDecoration: 'none' }}>+91 9430810464</a><br/>
                      <a href="tel:+919798209332" style={{ color: 'inherit', textDecoration: 'none' }}>+91 9798209332</a>
                    </p>
                  </div>
                </div>
                <div className="contact-item mb-3">
                  <i className="fas fa-envelope text-primary me-2"></i>
                  <div>
                    <strong>Email</strong>
                    <p>
                      <a href="mailto:cppschoolmuz@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>cppschoolmuz@gmail.com</a>
                    </p>
                  </div>
                </div>
                <div className="contact-item mb-3">
                  <i className="fas fa-clock text-primary me-2"></i>
                  <div>
                    <strong>Office Hours</strong>
                    <p>9:00 AM - 6:00 PM (Monday to Friday)</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Your Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary w-100"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin me-2"></i>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container-fluid p-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.614170330057!2d85.39190911056599!3d26.14412029260286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed108840203a73%3A0x11e80a51d68d57c9!2sChildren&#39;s%20Paradise%20Public%20School!5e0!3m2!1sen!2sin!4v1734784058609!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="CPPS Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
