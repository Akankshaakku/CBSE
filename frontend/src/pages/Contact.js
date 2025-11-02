import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { apiService } from '../services/api';

const Contact = () => {
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
      toast.error('कृपया सभी required fields भरें');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('कृपया एक valid email address दर्ज करें');
      return;
    }

    setIsSubmitting(true);
    try {
      await apiService.contact.submit(formData);
      toast.success('आपका message सफलतापूर्वक भेजा गया! हम जल्द ही आपसे contact करेंगे।');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data?.message || 'Message भेजने में समस्या आई। कृपया पुनः प्रयास करें।';
        toast.error(errorMessage);
      } else if (error.request) {
        toast.error('Network error. कृपया अपना internet connection जांचें और पुनः प्रयास करें।');
      } else {
        toast.error('एक unexpected error आया है। कृपया पुनः प्रयास करें।');
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
                <div className="contact-item mb-3">
                  <i className="fas fa-map-marker-alt text-primary me-2"></i>
                  <div>
                    <strong>Address</strong>
                    <p>Jiyalal Roy Chowk, Shekhpur, Ahiyapur, Akharaghat, Muzaffarpur, Bihar</p>
                  </div>
                </div>
                <div className="contact-item mb-3">
                  <i className="fas fa-phone text-primary me-2"></i>
                  <div>
                    <strong>Phone</strong>
                    <p>+91 9430810464<br/>+91 9798209332</p>
                  </div>
                </div>
                <div className="contact-item mb-3">
                  <i className="fas fa-envelope text-primary me-2"></i>
                  <div>
                    <strong>Email</strong>
                    <p>cppschoolmuz@gmail.com</p>
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
